# Music Playback – Failure Probability Model

This document summarizes where the implementation is **certain** vs **uncertain**, and models failure modes so future changes don’t break the [music playback criteria](script.js) (start at beginning, play when triggered, fade/stop when triggered, no stutter).

---

## 1. Where I May Have Gone Wrong (Uncertain)

| Area | Assumption | Risk if wrong |
|------|------------|----------------|
| **position_ms: 0 only** | Play API always honors `position_ms: 0` when starting a track; seek-after-play was removed to fix stutter/stop. | Some clients or states might ignore it → track starts from middle (criterion #1 broken). We have no fallback now. |
| **Pause before every play** | Pausing (even when idle) then 100ms then play is safe and reduces “resume from middle.” | Pause when nothing is playing could return 404 or put device in a bad state; extra API call could add latency or rate-limit risk. |
| **100ms settle** | 100ms between pause and play is enough to avoid stutter. | Arbitrary; too short could still stutter, too long could feel slow. No data. |
| **No seek after play** | Seek was causing “played then stopped” and/or stutter, so it was removed. | If the real cause was only the 120ms timing, we might have removed a valid backup for “start at beginning.” |
| **ensureSpotifyPlaybackDeviceReady** | When `spotifyDevicePrimed` we skip transfer (no 250–500ms delay). When not primed we transfer + long delay. | First play does: transfer + 500ms, setVolume, pause, 100ms, play → lots of API traffic; could contribute to stutter or rate limits. |

---

## 2. Where I Am Certain

| Area | Why it’s reliable |
|------|-------------------|
| **moveOnSafetyStopTimeout** | We clear it when starting a new tile (`playTileMusic`), on reset, restart, and when navigating away. So the 600ms delayed stop cannot fire after a new track has started. Logic is straightforward and covered. |
| **Fade/stop (criterion #3)** | `fadeOutTileMusic` and `stopTileMusic` were not changed in the stutter fixes. Move on / leave winner / leave landing still trigger the same fade or stop paths. |
| **“Played then stopped” fix** | Previously we scheduled `setTimeout(stopTileMusic, 600)` and never cleared it, so the next tile’s track could be stopped by that timeout. Now we always clear that timeout when entering `playTileMusic`. That failure mode is addressed. |

---

## 3. Failure Probability Model

Each failure mode is listed with: **trigger conditions**, **likelihood factors**, **current mitigation**, and **residual risk**.

### 3.1 Track does not start at beginning (criterion #1)

| Factor | Effect on probability | Notes |
|--------|------------------------|--------|
| Spotify client/version | Higher if client ignores `position_ms` for same URI or after certain state | No seek fallback anymore. |
| Same track played again | Possibly higher | Some clients might cache position. |
| **Mitigation** | We send `position_ms: 0` in the Play body. | No seek; if API ignores position, we have no backup. |
| **Residual** | **Medium** – depends entirely on Spotify honoring `position_ms`. |

### 3.2 Track does not play or stops soon after start (criterion #2)

| Factor | Effect on probability | Notes |
|--------|------------------------|--------|
| 600ms safety timeout | **Was high** (timeout could stop the *new* track). | **Fixed** by clearing timeout when starting a new tile. |
| Seek after play | **Was high** (seek could stop playback on some clients). | **Fixed** by removing seek. |
| Network / 404 / 502 | Medium | Retry path (transfer + pause + play) helps. |
| **Residual** | **Low** for “new track killed by our own logic”; **medium** for API/network. |

### 3.3 Fade/stop does not run or is wrong (criterion #3)

| Factor | Effect on probability | Notes |
|--------|------------------------|--------|
| Logic unchanged | Same as before stutter work. | Fade and stop paths untouched. |
| **Residual** | **Low** – no known regression. |

### 3.4 Stutter or glitch on initial play (criterion #4)

| Factor | Effect on probability | Notes |
|--------|------------------------|--------|
| Pause → play too fast | **Higher** if delay too small. | We use 100ms; no evidence it’s optimal. |
| Seek after play | **Was higher** (we assumed). | Removed. |
| Too many API calls in a short time | **Higher** (rate limit or device overload). | We do: setVolume, pause, 100ms, play; on first play also transfer + 250–500ms. |
| **Mitigation** | Single pause, 100ms settle, no seek, no double-pause from `playTileMusic`. | |
| **Residual** | **Medium** – device/client and network dependent; 100ms is a guess. |

---

## 4. Summary Table (Rough)

| Criterion | Residual failure probability | Main uncertainty |
|-----------|------------------------------|-------------------|
| 1. Start at beginning | Medium | `position_ms` only; no seek fallback. |
| 2. Play when triggered | Low (our logic) / Medium (API) | Timeout/seek fixes in place; API can still fail. |
| 3. Fade/stop when triggered | Low | Unchanged. |
| 4. No stutter/glitch | Medium | 100ms and API load are unvalidated. |

---

## 5. Implemented / Possible Next Steps

1. **Conditional pause (implemented)** – Before play we call `getSpotifyPlaybackState()`; we only send Pause and the 100ms settle if `state.is_playing === true`. When the device is idle we skip pause and go straight to play. Reduces unnecessary API call and may reduce stutter when nothing was playing. Criterion #1 unchanged (we still send `position_ms: 0` in the play body).
2. **Optional seek fallback (not implemented)** – If we ever see “start from middle” again: after `waitForSpotifyTrackToStart` succeeds, wait 200–300ms then call seek(0) once, with a single retry if playback stops. Adds complexity and could reintroduce stutter if not careful.
3. **Tune 100ms** – A/B or user feedback: try 80ms vs 120ms vs 150ms and see if stutter rate or “played then stopped” changes.
4. **Logging** – Log when play returns 204 but `waitForSpotifyTrackToStart` fails, and when pause returns non-2xx, to validate assumptions in the wild.

---

## 6. How to Address the Failure Model (Objective)

This section is strictly options, tradeoffs, and evidence—no recommendation of one fix over another. The right action depends on which failure mode actually occurs in production.

### 6.1 Criterion #1 (start at beginning) – residual: Medium

| Option | Effect on probability | Tradeoff / cost |
|--------|------------------------|------------------|
| **A. Do nothing** | Keeps current risk. | No code change; if `position_ms` is ignored in some cases, users will occasionally see start-from-middle. |
| **B. Add seek fallback** | Likely **lowers** #1. | Seek after play can **raise** #2 (playback stops) or #4 (stutter) on some clients—the reason we removed it. Would need a long delay (e.g. 300–500ms) after play and possibly only when `getSpotifyPlaybackState()` shows `position_ms > 0`. |
| **C. Detect and retry** | If we only seek when we detect wrong position, we limit seek use. | Need to poll state after play; adds latency and extra API calls. |

**Evidence needed:** Log or user reports of "track started from middle." Without that we don't know if #1 is actually occurring; if it isn't, B or C add complexity and risk for no gain.

---

### 6.2 Criterion #2 (play when triggered) – residual: Low (our logic) / Medium (API)

| Option | Effect | Tradeoff |
|--------|--------|----------|
| **A. Do nothing** | Keeps current risk. | Timeout and seek causes are fixed; remaining failures are API/network. |
| **B. More retries** | May **lower** API-related failure. | More delay and more API load; could worsen #4 or rate limits. |
| **C. User "Retry" control** | Doesn't lower probability but gives recovery. | UX only; no change to failure rate. |

**Evidence needed:** How often does play return 204 but playback doesn't start, or play return 4xx/5xx? Logging `response.ok` and `waitForSpotifyTrackToStart` outcome would tell us.

---

### 6.3 Criterion #3 (fade/stop) – residual: Low

No change unless we see regressions (e.g. reports that music doesn't stop or doesn't fade). No action in code without evidence.

---

### 6.4 Criterion #4 (no stutter) – residual: Medium

| Option | Effect | Tradeoff |
|--------|--------|----------|
| **A. Tune delay** | 80ms / 120ms / 150ms might **lower** stutter or **raise** it; unknown without testing. | Purely empirical; no way to know without A/B or config-driven tests. |
| **B. Fewer API calls** | Might **lower** stutter (less device/network load). | e.g. Skip `setSpotifyPlaybackVolume(100)` when we just did transfer (transfer doesn't set volume to 0). Small gain; needs verification. |
| **C. Don't pause when idle** | Already done (conditional pause). | When state is unknown we still pause; could try "skip pause when state is null" to reduce one call, but that **raises** risk of leaving previous track playing. |

**Evidence needed:** Correlate stutter with delay value, device type, or network. Without data we're guessing; 100ms is an arbitrary choice.

---

### 6.5 Cross-cutting: Logging and evidence

Until we have evidence, we're choosing options by guess. The only objective way to address the model is to reduce uncertainty first:

| Log / metric | Informs |
|--------------|--------|
| Play response status + `waitForSpotifyTrackToStart` result | Whether #2 failures are "accepted but didn't start" vs network/4xx. |
| `getSpotifyPlaybackState()` after play: `position_ms`, `is_playing` | Whether #1 occurs (start from middle) and whether #2 occurs (not playing). |
| Pause response status when we pause | Whether "pause when idle" causes 404 or odd behavior. |
| User- or device-identifiable stutter report (e.g. "stutter" button or session id + "stutter" in feedback) | Whether #4 correlates with delay, first-play vs later, etc. |

Implementing lightweight, non-intrusive logging (e.g. console or a small diagnostics endpoint) gives data to decide which of 6.1–6.4 options are worth it.

---

### 6.6 Objective order of operations

1. **Gather evidence** (logging as above, plus any user reports). Without it we cannot know which failure mode dominates.
2. **Act on the dominant failure mode** (the one that shows up in logs or reports): apply the option from 6.1–6.4 that targets it, respecting the tradeoffs.
3. **Re-evaluate** after each change: did that criterion improve without worsening another? (Check criteria checklist.)
4. **Tune parameters** (e.g. delay, retry count) only after we have a measurable outcome (e.g. "stutter reports" or "play success rate").

This order is objective: reduce uncertainty first, then change code where the model says risk is real and the tradeoff is acceptable.

---

*See also: MUSIC PLAYBACK CRITERIA comment in `script.js` above `playTileMusic`, and README “Music playback criteria” section.*

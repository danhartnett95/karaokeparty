# Karaoke Party! Jeopardy Game

A web-based music trivia game that integrates with Spotify to play songs from user-selected playlists.

## Features

- 🎵 Spotify integration for music playback
- 🎯 Trivia game with 6 categories of 5 questions each
- 🎮 Two-team scoring system
- 🎨 Modern, responsive UI
- 📱 Works on desktop and mobile browsers

## Deployment to Netlify

### Prerequisites

1. A Spotify Developer account and app (get one at https://developer.spotify.com/)
2. A Netlify account (free tier works)

### Setup Steps

1. **Deploy to Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Drag and drop the `jeopardy-game` folder, OR
   - Connect your Git repository and set up continuous deployment

2. **Get your Netlify URL:**
   - After deployment, Netlify will give you a URL like: `https://your-site-name.netlify.app`
   - Copy this URL (it will be your site's base URL)

3. **Configure Spotify App:**
   - Go to your Spotify app dashboard: https://developer.spotify.com/dashboard
   - Click "Edit Settings"
   - Add your Netlify URL to "Redirect URIs":
     - Format: `https://your-site-name.netlify.app`
     - Make sure there's no trailing slash
   - Save changes

4. **Update Client ID (if needed):**
   - The client ID should already be set in `script.js` (line 128)
   - If you need to change it, edit `SPOTIFY_CLIENT_ID` in `script.js`

### File Structure

```
jeopardy-game/
├── index.html          # Main HTML file
├── style.css           # All styles
├── script.js           # Main application logic
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

### Important Notes

- **Redirect URI**: The app automatically detects the current URL for the Spotify redirect URI, so it will work on any domain
- **HTTPS Required**: Spotify requires HTTPS for authentication, which Netlify provides automatically
- **No Build Process**: This is a static site - no build step needed
- **Client-Side Only**: All processing happens in the browser

### Troubleshooting

- **Spotify connection fails**: Check that your redirect URI in Spotify dashboard exactly matches your Netlify URL (no trailing slash)
- **Songs don't play**: Ensure you have a Spotify Premium account (required for Web Playback SDK)
- **Categories not showing**: Check browser console for any errors or missing playlists

## Development

To run locally:
1. Use a local server (e.g., `python -m http.server 8000` or `npx serve`)
2. Update Spotify redirect URI to `http://localhost:8000`
3. Open `http://localhost:8000` in your browser

### Music playback criteria

When changing playback, fade, or stop logic in `script.js`, all of the following must remain true:

1. **Start at the beginning** – Every song (landing playlist and trivia tiles) must start at position 0.
2. **Play when triggered** – Songs must play reliably when clicked/triggered with no issues.
3. **Fade out and stop when triggered** – Move on, leaving the winner screen, and leaving the landing page must fade and stop correctly.
4. **No stutter or glitch on initial play** – Playback must start smoothly without stutter or glitch.

Fixes for one criterion must not break another (e.g. fixing stutter must not break start-from-beginning or fade/stop). The same criteria are documented in `script.js` above `playTileMusic`.

## License

Private project - All rights reserved

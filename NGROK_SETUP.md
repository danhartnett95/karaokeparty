# Setting Up ngrok for Spotify Redirect URL

## Step 1: Start a Local Web Server

You need to serve your files through a web server. Here are your options:

### Option A: Using VS Code Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` in VS Code
3. Select "Open with Live Server"
4. Note the port number (usually 5500 or 8080)

### Option B: Using Python (if you have it installed)
```bash
cd c:\Users\danha\jeopardy-game
python -m http.server 8000
```

### Option C: Using Node.js http-server (if you have Node.js)
```bash
npx http-server -p 8000
```

## Step 2: Start ngrok Tunnel

Once your web server is running, start ngrok pointing to the same port:

```bash
cd c:\Users\danha\jeopardy-game
ngrok http 8000
```

(Replace `8000` with your actual port number if different)

## Step 3: Copy Your ngrok URL

After starting ngrok, you'll see output like:
```
Forwarding  https://abc123.ngrok-free.app -> http://localhost:8000
```

Copy the HTTPS URL (e.g., `https://abc123.ngrok-free.app`)

## Step 4: Update Spotify App Settings

1. Go to https://developer.spotify.com/dashboard
2. Click on your app (or create a new one)
3. Click "Edit Settings"
4. Under "Redirect URIs", add your ngrok URL:
   - `https://abc123.ngrok-free.app`
   - Or the full path: `https://abc123.ngrok-free.app/index.html`
5. Click "Add" then "Save"

## Step 5: Update Your Code (if needed)

The code already uses `window.location.origin + window.location.pathname` which will automatically use your current URL, so it should work automatically when accessed through the ngrok tunnel.

However, if you want to hardcode it, you can update `script.js`:
```javascript
const SPOTIFY_REDIRECT_URI = 'https://your-ngrok-url.ngrok-free.app';
```

## Important Notes:

- **Free ngrok URLs change each time you restart ngrok** unless you have a paid plan
- Each time you restart ngrok, you'll need to update the Redirect URI in Spotify
- Keep both your web server AND ngrok running while testing
- The ngrok URL will be active as long as the ngrok process is running

## Troubleshooting:

- Make sure your local web server is running BEFORE starting ngrok
- Make sure the port numbers match (ngrok port = web server port)
- Check that the Redirect URI in Spotify exactly matches your ngrok URL
- Clear your browser cache if you have authentication issues

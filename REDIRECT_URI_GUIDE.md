# Spotify Redirect URI Setup Guide

## Can I Use an Existing Spotify App?
**Yes!** You can absolutely use an existing Spotify app. Just update the redirect URI in your app settings.

## What Redirect URI Should I Use?

### Option 1: Local Development (Recommended)
If you're running the game locally:

1. **Start a local server** (choose one method):
   - **Python 3**: Open terminal in the game folder and run: `python -m http.server 8000`
   - **Python 2**: `python -m SimpleHTTPServer 8000`
   - **Node.js**: `npx http-server -p 8000`
   - **VS Code**: Use the "Live Server" extension

2. **Access the game at**: `http://localhost:8000` or `http://127.0.0.1:8000`

3. **Set Redirect URI in Spotify App**:
   - Go to https://developer.spotify.com/dashboard
   - Click on your app
   - Click "Edit Settings"
   - Under "Redirect URIs", add: `http://localhost:8000`
   - Click "Add" then "Save"

### Option 2: Specific Port
If you want to use a different port (e.g., 3000, 8080):
- Use that port in your server command
- Add `http://localhost:3000` (or your port) to Spotify app redirect URIs

### Option 3: Production/Deployed Site
If you've deployed the game online:
- Use your actual domain: `https://yourdomain.com`
- Add this exact URL to your Spotify app redirect URIs

## Important Notes:

1. **Multiple Redirect URIs**: You can add multiple redirect URIs to one Spotify app. This is useful if you test locally and also deploy online.

2. **Exact Match Required**: The redirect URI must match EXACTLY (including http vs https, trailing slashes, etc.)

3. **File Protocol Won't Work**: You cannot use `file://` protocol. You MUST use a web server (http:// or https://).

4. **The Code Auto-Detects**: The code automatically uses `window.location.origin + window.location.pathname`, so it will work with whatever URL you're using, as long as that URL is in your Spotify app settings.

## Quick Setup Steps:

1. Start a local server in the game folder: `python -m http.server 8000`
2. Open browser to: `http://localhost:8000`
3. Go to Spotify Dashboard → Your App → Edit Settings
4. Add redirect URI: `http://localhost:8000`
5. Update `SPOTIFY_CLIENT_ID` in `script.js` with your Client ID
6. Refresh the game page and click "Connect to Spotify"

## Troubleshooting:

- **"Invalid redirect URI"**: Make sure the URL in your browser matches exactly what's in Spotify app settings
- **"Redirect URI mismatch"**: Check for typos, http vs https, trailing slashes
- **Buttons not showing**: Make sure you're using a web server, not opening the file directly

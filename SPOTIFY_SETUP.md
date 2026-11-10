# Spotify Integration Setup Guide

## Prerequisites
- Spotify Premium account
- Spotify Developer account

## Setup Steps

### 1. Create a Spotify App
1. Go to https://developer.spotify.com/dashboard
2. Log in with your Spotify account
3. Click "Create an app"
4. Fill in:
   - App name: "Karaoke Jeopardy" (or any name)
   - App description: "Karaoke Jeopardy Game"
   - Redirect URI: `http://localhost:8000` (or your actual URL)
   - Website: (optional)
5. Click "Save"
6. Copy your **Client ID**

### 2. Update the Code
1. Open `script.js`
2. Find the line: `const SPOTIFY_CLIENT_ID = 'YOUR_SPOTIFY_CLIENT_ID';`
3. Replace `YOUR_SPOTIFY_CLIENT_ID` with your actual Client ID from step 1

### 3. Update Redirect URI
1. In `script.js`, the `SPOTIFY_REDIRECT_URI` is automatically set to the current page URL
2. Make sure this matches the Redirect URI you set in your Spotify app settings
3. If running locally, you may need to use `http://localhost:8000` or similar

### 4. Run the Application
1. Open `index.html` in a web browser
2. Click "Connect to Spotify"
3. Authorize the app
4. Select a playlist from the dropdown
5. The game will use tracks from your selected playlist!

## How It Works
- When you connect to Spotify, the app fetches all your playlists
- Select a playlist from the dropdown
- The app randomly assigns 25 tracks from that playlist to the game board
- When you click a tile, it plays the corresponding Spotify track
- Tracks continue playing until you click "Move On"

## Troubleshooting
- **"Invalid client"**: Check that your Client ID is correct
- **"Redirect URI mismatch"**: Make sure the redirect URI in your Spotify app matches the URL you're using
- **"Premium required"**: Spotify Web Playback SDK requires a Premium account
- **No playlists showing**: Make sure you have playlists in your Spotify account

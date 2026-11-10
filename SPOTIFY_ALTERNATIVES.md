# Spotify Redirect URI Alternatives

If Spotify won't accept `localhost`, here are working alternatives:

## Option 1: Use 127.0.0.1 Instead (Easiest)
Spotify sometimes accepts `127.0.0.1` when `localhost` doesn't work:

1. Start your server: `python -m http.server 8000`
2. Access game at: `http://127.0.0.1:8000`
3. In Spotify Dashboard → Your App → Edit Settings:
   - Add redirect URI: `http://127.0.0.1:8000`
   - Save

## Option 2: Use ngrok (Tunneling Service) - Recommended
ngrok creates a public HTTPS URL that tunnels to your local server:

1. **Install ngrok**: Download from https://ngrok.com/download
2. **Start your local server**: `python -m http.server 8000`
3. **In a new terminal, run ngrok**: `ngrok http 8000`
4. **Copy the HTTPS URL** (e.g., `https://abc123.ngrok.io`)
5. **In Spotify Dashboard**:
   - Add redirect URI: `https://abc123.ngrok.io` (use the exact URL ngrok gives you)
   - Save
6. **Update the code** (optional): You can hardcode this URL, or the auto-detection will work

**Note**: Free ngrok URLs change each time you restart ngrok. For a stable URL, you can:
- Sign up for a free ngrok account to get a fixed subdomain
- Or just update the redirect URI in Spotify each time

## Option 3: Use localtunnel (Free Alternative)
Similar to ngrok but free and open source:

1. **Install**: `npm install -g localtunnel`
2. **Start your server**: `python -m http.server 8000`
3. **Run**: `lt --port 8000`
4. **Copy the URL** it gives you (e.g., `https://random-name.loca.lt`)
5. **Add to Spotify** as redirect URI

## Option 4: Deploy to Free Hosting
Deploy your game to a free hosting service:

- **Netlify**: Drag and drop your folder
- **Vercel**: Connect GitHub repo
- **GitHub Pages**: Free hosting for static sites
- **Surge.sh**: `npm install -g surge` then `surge` in your folder

Then use your deployed URL as the redirect URI.

## Option 5: Use a Custom Domain (Advanced)
If you have a domain, you can:
1. Point it to your local IP
2. Use that domain as the redirect URI

## Quick Setup with ngrok (Recommended):

```bash
# Terminal 1: Start your server
cd C:\Users\danha\jeopardy-game
python -m http.server 8000

# Terminal 2: Start ngrok
ngrok http 8000

# Copy the "Forwarding" URL (e.g., https://abc123.ngrok.io)
# Add this exact URL to Spotify app redirect URIs
```

The code will automatically detect the ngrok URL and use it!

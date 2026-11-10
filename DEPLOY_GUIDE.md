# Deploying Your Game to a Website

Yes! Deploying to a website and using that URL is a great solution. Here are the easiest free options:

## Option 1: Netlify (Easiest - Drag & Drop)

1. Go to https://www.netlify.com/
2. Sign up (free)
3. Drag and drop your entire `jeopardy-game` folder onto the Netlify dashboard
4. Netlify will give you a URL like: `https://random-name-123.netlify.app`
5. Use this URL in Spotify Dashboard as your redirect URI
6. Done! Your game is live.

**Pros**: Super easy, instant deployment, free HTTPS
**Cons**: URL is random (but you can set a custom domain later)

## Option 2: Vercel (Also Easy)

1. Go to https://vercel.com/
2. Sign up with GitHub (free)
3. Create a new project
4. Upload your folder or connect GitHub repo
5. Get URL like: `https://your-project.vercel.app`
6. Use this URL in Spotify Dashboard

**Pros**: Fast, free, good performance
**Cons**: Requires GitHub account (free)

## Option 3: GitHub Pages (Free, Permanent)

1. Create a GitHub account (if you don't have one)
2. Create a new repository
3. Upload all your game files
4. Go to Settings → Pages
5. Select main branch as source
6. Get URL like: `https://yourusername.github.io/repo-name`
7. Use this URL in Spotify Dashboard

**Pros**: Free, permanent URL, version control
**Cons**: Slightly more setup

## Option 4: Surge.sh (Command Line, Very Fast)

1. Install: `npm install -g surge`
2. In your game folder, run: `surge`
3. Follow prompts (create free account)
4. Get URL like: `https://your-name.surge.sh`
5. Use this URL in Spotify Dashboard

**Pros**: Very fast, simple
**Cons**: Command line required

## Important Notes:

✅ **The code will automatically work** - It detects the current URL automatically, so once deployed, it will use the deployed URL

✅ **HTTPS is required** - All these services provide free HTTPS, which Spotify requires

✅ **Redirect URI must match exactly** - Use the exact URL from your hosting service

✅ **You can update later** - If you change hosting, just update the redirect URI in Spotify Dashboard

## Quick Setup Example (Netlify):

1. Go to netlify.com and sign up
2. Drag your `jeopardy-game` folder to the dashboard
3. Copy the URL it gives you (e.g., `https://karaoke-jeopardy-123.netlify.app`)
4. In Spotify Dashboard → Your App → Edit Settings:
   - Add redirect URI: `https://karaoke-jeopardy-123.netlify.app`
   - Save
5. Update `SPOTIFY_CLIENT_ID` in `script.js` with your Client ID
6. Your game is live and ready!

## Troubleshooting:

- **"Invalid redirect URI"**: Make sure you're using the exact URL (including https://)
- **Code not working**: Make sure all files are uploaded (index.html, script.js, style.css)
- **Can't access game**: Check that the deployment completed successfully

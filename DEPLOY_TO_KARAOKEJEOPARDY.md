# Deploying to www.karaokejeopardy.com

## Step 1: Set Up Your Domain

If you already own `karaokejeopardy.com`:
- You're all set! Skip to Step 2.

If you don't own it yet:
- Purchase it from a domain registrar (Namecheap, GoDaddy, Google Domains, etc.)
- Cost: Usually $10-15/year

## Step 2: Choose a Hosting Service

### Option A: Netlify (Recommended - Easiest)
1. Go to https://www.netlify.com/ and sign up
2. Drag and drop your `jeopardy-game` folder to deploy
3. Go to Site settings → Domain management
4. Click "Add custom domain"
5. Enter: `www.karaokejeopardy.com`
6. Follow Netlify's DNS instructions to point your domain to Netlify

### Option B: Vercel
1. Go to https://vercel.com/ and sign up
2. Deploy your project
3. Go to Project Settings → Domains
4. Add: `www.karaokejeopardy.com`
5. Follow Vercel's DNS instructions

### Option C: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings → Pages
4. Use a custom domain: `www.karaokejeopardy.com`
5. Update your DNS records as instructed

## Step 3: Configure DNS

You'll need to add DNS records at your domain registrar:

**For Netlify:**
- Add a CNAME record:
  - Name: `www`
  - Value: `your-site-name.netlify.app`
- Or add an A record pointing to Netlify's IP (they'll provide this)

**For Vercel:**
- Add a CNAME record:
  - Name: `www`
  - Value: `cname.vercel-dns.com`

## Step 4: Update Spotify Settings

Once your site is live at www.karaokejeopardy.com:

1. Go to https://developer.spotify.com/dashboard
2. Click on your app
3. Click "Edit Settings"
4. Under "Redirect URIs", add:
   - `https://www.karaokejeopardy.com`
   - `https://karaokejeopardy.com` (optional, for non-www)
5. Click "Add" then "Save"

## Step 5: Update Your Code

1. Open `script.js`
2. Find: `const SPOTIFY_CLIENT_ID = 'YOUR_SPOTIFY_CLIENT_ID';`
3. Replace with your actual Spotify Client ID
4. The redirect URI will automatically use `https://www.karaokejeopardy.com` when deployed

## Step 6: Test

1. Visit https://www.karaokejeopardy.com
2. Click "Connect to Spotify"
3. You should be redirected to Spotify for authorization
4. After authorizing, you'll be redirected back to your site

## Important Notes:

✅ **HTTPS is required** - All modern hosting services provide free SSL certificates
✅ **The code auto-detects the URL** - No code changes needed for the domain
✅ **DNS propagation** - Can take 24-48 hours, but usually works within minutes
✅ **Both www and non-www** - You can add both URLs to Spotify redirect URIs if you want

## Troubleshooting:

- **Domain not working**: Check DNS records are correct, wait for propagation
- **SSL/HTTPS issues**: Most hosts auto-configure SSL, but may take a few minutes
- **Spotify redirect error**: Make sure the exact URL (with https:// and www) is in Spotify settings

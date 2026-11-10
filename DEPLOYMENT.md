# Deployment Checklist for Netlify

## ✅ Pre-Deployment Checklist

- [x] **No hardcoded localhost/ngrok URLs** - ✓ Redirect URI auto-detects from current URL
- [x] **All external resources use HTTPS** - ✓ Spotify SDK, Google Fonts use HTTPS
- [x] **No build process required** - ✓ Static HTML/CSS/JS site
- [x] **Netlify configuration created** - ✓ `netlify.toml` with proper routing
- [x] **Code syntax validated** - ✓ No linter errors

## 📋 Deployment Steps

### 1. Deploy to Netlify

**Option A: Drag & Drop (Quickest)**
1. Go to https://app.netlify.com/drop
2. Drag the `jeopardy-game` folder to the deployment area
3. Wait for deployment to complete
4. Copy your site URL (e.g., `https://your-site-name.netlify.app`)

**Option B: Git Integration (Recommended)**
1. Push code to GitHub/GitLab/Bitbucket
2. In Netlify, click "Add new site" → "Import an existing project"
3. Connect your repository
4. Build settings:
   - Build command: (leave empty or use: `echo "No build needed"`)
   - Publish directory: `.` (root)
5. Deploy

### 2. Configure Spotify App

1. Go to https://developer.spotify.com/dashboard
2. Select your app (Client ID: `e9856e9af1fc4a1a866a3a557f248081`)
3. Click "Edit Settings"
4. In "Redirect URIs", add:
   ```
   https://your-site-name.netlify.app
   ```
   ⚠️ **Important**: 
   - Use your actual Netlify URL
   - No trailing slash
   - Must be HTTPS (Netlify provides this automatically)
5. Click "Add" then "Save"

### 3. Test Deployment

1. Visit your Netlify URL
2. Click "Connect to Spotify"
3. Verify authentication works
4. Test category selection
5. Test game functionality

## 🔧 Configuration Files Included

- **`netlify.toml`**: Handles routing and headers
- **`README.md`**: Documentation for future reference
- **`.gitignore`**: Excludes unnecessary files

## ⚠️ Important Notes

### Spotify Requirements
- **Spotify Premium** required for music playback
- Redirect URI must **exactly match** (no trailing slash)
- Client ID is already configured in `script.js`

### File Structure
- `index.html` - Main entry point
- `style.css` - All styles
- `script.js` - Application logic
- `karaoke-jeopardy-sound-effects/` - **Include in deploy** (wrong_answer.mp3, right_answer.mp3, cinematic transition) so in-game sounds work; app still runs if missing
- `karaoke-jeopardy-landing-songs/1.mp3` … `5.mp3` - Optional; include if you want landing Play-screen music on Netlify
- Local music files (`music/*.mp3`) - Fallback only (optional, won't break if missing)

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Requires cookies/localStorage for Spotify tokens

## 🐛 Troubleshooting

**Issue**: Spotify authentication fails
- **Solution**: Verify redirect URI in Spotify dashboard matches Netlify URL exactly

**Issue**: Songs don't play
- **Solution**: Ensure you have Spotify Premium account

**Issue**: Categories not showing
- **Solution**: Check browser console for errors, verify playlist names match exactly

**Issue**: 404 errors for music files
- **Solution**: These are fallback files - ignore if using Spotify playlists only

**Issue**: Landing song fails with "no supported source" or "DEMUXER_ERROR_COULD_NOT_OPEN" on Netlify
- **Solution**: The app is receiving `index.html` instead of the MP3 because the landing song files aren’t in the deploy. Do both:
  1. In `netlify.toml` the SPA redirect must have `force = false` (so real files are served when they exist).
  2. Include the folder `karaoke-jeopardy-landing-songs` and files `1.mp3`–`5.mp3` in what you deploy (commit them to Git if using Git deploy, or include the folder when you drag-and-drop).

## 📝 Post-Deployment

After deployment is successful:
1. Test all functionality
2. Update Spotify redirect URI if you changed domains
3. Share your Netlify URL with users

## 🔒 Security Notes

- Client ID is public (this is normal for Spotify apps)
- Access tokens are stored in localStorage (browser-only)
- All API calls use HTTPS
- Security headers configured in `netlify.toml`

---

**Ready to deploy!** 🚀

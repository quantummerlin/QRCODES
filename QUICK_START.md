# ⚡ Quantum Council PWA - Quick Start Guide

**Get your manifestation app running in 5 minutes!**

---

## 🎯 Choose Your Version

### Option A: Enhanced Version (Recommended)
**Best for:** Full experience with all features
**Files needed:** 4 core files

### Option B: Basic Version
**Best for:** Quick testing, minimal setup
**Files needed:** 4 core files

---

## 📦 Step 1: Get Your Files Ready

### For Enhanced Version:
1. Rename `index-enhanced.html` → `index.html`
2. Rename `app-enhanced.js` → `app.js`
3. Keep `manifest.json` as is
4. Keep `sw.js` as is

### For Basic Version:
1. Use `index.html` as is
2. Use `app.js` as is
3. Keep `manifest.json` as is
4. Keep `sw.js` as is

Put all 4 files in one folder called `quantum-council-pwa`

---

## 🚀 Step 2: Deploy to GitHub Pages

### A. Create GitHub Repository
1. Go to github.com
2. Click "New repository"
3. Name: `quantum-council-pwa`
4. Click "Create repository"

### B. Push Your Files
```bash
cd quantum-council-pwa
git init
git add .
git commit -m "Deploy Quantum Council PWA"
git remote add origin https://github.com/YOUR-USERNAME/quantum-council-pwa.git
git branch -M main
git push -u origin main
```

### C. Enable GitHub Pages
1. Go to repo Settings
2. Click "Pages" in sidebar
3. Source: "Deploy from a branch"
4. Branch: `main`, folder: `/ (root)`
5. Click "Save"

**Wait 2 minutes**, then visit:
```
https://YOUR-USERNAME.github.io/quantum-council-pwa/
```

---

## 📱 Step 3: Install on Your Phone

### Android (Chrome):
1. Open the URL on your phone
2. Tap "Add to Home screen" when prompted
3. Or: Menu (⋮) → "Add to Home screen"
4. Tap "Add"
5. Done! App is on your home screen

### iOS (Safari):
1. Open the URL in Safari
2. Tap Share button (square with arrow)
3. Scroll and tap "Add to Home Screen"
4. Tap "Add"
5. Done! App is on your home screen

---

## 🎮 Step 4: Start Using It

### First Time Setup (2 minutes):
1. Open the app
2. Complete 4-step onboarding:
   - Welcome
   - Set your intention
   - Learn about reality checks
   - Start your journey
3. First achievement unlocked! 🎉

### Daily Routine (5-10 minutes):
- **Morning:** Check daily challenge, quick Council session
- **Throughout day:** Log wins as they happen
- **Evening:** Complete reality check, review progress

---

## 🎨 Quick Customization (Optional)

### Change Colors:
Open `index.html`, find `:root` in `<style>`, change:
```css
--primary: #4A90E2;    /* Your brand color */
--secondary: #9B59B6;  /* Accent color */
```

### Add Your Own Persona:
Open `app.js`, find `SAFE_PERSONAS`, add:
```javascript
SAFE_PERSONAS.guides.push({
  id: 'my_guide',
  name: 'My Guide Name',
  avatar: '🌟',
  role: 'helper',
  style: 'gentle'
});
```

---

## ✅ Verify It's Working

### Checklist:
- [ ] App loads in browser
- [ ] Onboarding completes
- [ ] Intention saves
- [ ] Council messages appear
- [ ] Reality check submits
- [ ] Data persists after refresh
- [ ] Works offline (turn off WiFi and test)
- [ ] Installs on phone
- [ ] Opens from home screen

---

## 🐛 Quick Troubleshooting

### App won't load:
- Check all 4 files are in the same folder
- Verify file names are correct
- Check browser console for errors

### PWA won't install:
- Must use HTTPS (GitHub Pages does this automatically)
- Check manifest.json has correct paths
- Try clearing browser cache

### Data doesn't save:
- Don't use private/incognito mode
- Check browser localStorage is enabled
- Try a different browser

---

## 🎉 You're Done!

Your Quantum Council PWA is now:
- ✅ Deployed and live
- ✅ Installed on your phone
- ✅ Ready to use daily
- ✅ Working offline
- ✅ Tracking your progress

**Start your manifestation journey now!** 🌙✨

---

## 📚 Need More Help?

- **Full docs:** See README.md
- **Deployment details:** See DEPLOYMENT_GUIDE.md or ENHANCED_DEPLOYMENT_GUIDE.md
- **Testing:** See TESTING_CHECKLIST.md
- **Features:** See FINAL_IMPLEMENTATION_SUMMARY.md

---

**Questions? Issues? Check the documentation or open a GitHub issue.**

**Happy manifesting!** ✨
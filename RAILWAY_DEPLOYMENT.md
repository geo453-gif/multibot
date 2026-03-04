# 🚀 Deploy MultiBot to Railway

**Railway** is the recommended platform for deploying MultiBot. It's easy, reliable, and has a generous free tier.

**Benefits:**
- ✅ Free tier with $5/month credit
- ✅ GitHub integration (auto-deploy on push)
- ✅ Easy environment variables
- ✅ Instant deployment
- ✅ Great dashboard
- ✅ No credit card for free tier

---

## 📋 Prerequisites

Before you start, have ready:

1. **Railway Account** (create at railway.app)
2. **GitHub Account** (create at github.com)
3. **Discord Bot Token** (from Discord Developer Portal)
4. **Client ID** (from Discord Developer Portal)
5. **MultiBot Files** (all the files from this package)

---

## Step 1: Create GitHub Repository (5 minutes)

### 1.1 Create GitHub Account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up"
3. Complete registration
4. Verify email

### 1.2 Create New Repository

1. Go to https://github.com/new
2. Fill in:
   - **Repository name:** `multibot` (or your preferred name)
   - **Description:** `Multipurpose Discord Bot with 1000+ Commands`
   - **Public or Private:** Your choice (private is fine)
3. Click **"Create repository"**

### 1.3 Upload Bot Files to GitHub

**Option A: Using GitHub Web Interface (Easiest)**

1. Open your new repository
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop all bot files:
   - `bot.js`
   - `package.json`
   - `public/index.html`
   - `.env.example` (optional)
   - All documentation files (optional)
4. Click **"Commit changes"**

**Option B: Using Git Command Line**

If you prefer using terminal:

```bash
# Clone your empty repository
git clone https://github.com/YOUR_USERNAME/multibot.git
cd multibot

# Copy all bot files into this folder
# Then push to GitHub:
git add .
git commit -m "Add MultiBot source code"
git push origin main
```

✅ Your code is now on GitHub!

---

## Step 2: Create Railway Project (5 minutes)

### 2.1 Sign Up for Railway

1. Go to https://railway.app
2. Click **"Start Building"**
3. Sign up with GitHub (easiest - auto-connects)
4. Authorize Railway to access GitHub
5. Complete registration

### 2.2 Create New Project

1. Click **"New Project"** (or **"+"** button)
2. Select **"Deploy from GitHub repo"**
3. Connect your GitHub account if not already connected
4. Search for your `multibot` repository
5. Click to select it
6. Railway will show: *"Detected: Node.js"* ✅
7. Click **"Deploy"**

### 2.3 Configure Environment Variables

Railway will show a configuration screen.

1. Click **"Variables"** tab
2. Add your Discord credentials:

```
DISCORD_TOKEN = your_bot_token_here
CLIENT_ID = your_client_id_here
PORT = 3000
NODE_ENV = production
```

Where to get these:
- **DISCORD_TOKEN:** Discord Developer Portal → Bot → Copy Token
- **CLIENT_ID:** Discord Developer Portal → General Information → Application ID

3. Click **"Save"** after adding each variable

⚠️ **IMPORTANT:** 
- Never share your DISCORD_TOKEN
- Railway keeps it secure
- You can't see it again after saving (by design)

### 2.4 Deploy

1. Review your settings
2. Click **"Deploy"**
3. Wait for deployment to complete (2-5 minutes)
4. You'll see ✅ when complete

---

## Step 3: Verify Deployment (5 minutes)

### 3.1 Check Bot Status

1. In Railway dashboard, click your project
2. Click the **"bot"** service
3. Scroll down to **"Deployments"**
4. You should see a green checkmark ✅

### 3.2 Get Your Bot URL

1. In the **"bot"** service, look for **"Domains"**
2. Copy the railway.app URL (something like: `multibot-production.up.railway.app`)
3. This is your dashboard URL!

### 3.3 Test Bot in Discord

1. Go to your Discord server
2. Type `/help`
3. Bot should respond with command categories ✅

### 3.4 Access Dashboard

1. Open your Railway URL in browser
2. You should see the dashboard with statistics
3. Try the command browser - search some commands

✅ **Your bot is live on Railway!**

---

## Step 4: Keep Bot Running 24/7

### 4.1 Understanding Railway's Free Tier

Railway provides:
- ✅ Free $5/month credit
- ✅ This covers ~100 hours of bot running
- ✅ Sufficient for most use cases

### 4.2 Enable Always-On (Optional)

If you want guaranteed 24/7 uptime:

1. In Railway dashboard, click your project
2. Click **"Settings"**
3. Find **"Plan"** section
4. Click **"Upgrade"** (or use pay-as-you-go)
5. This costs ~$7/month for always-on

Or stay on free tier - it will restart automatically when credit resets.

---

## Step 5: Auto-Deploy from GitHub (Recommended)

Railway automatically deploys when you push code changes!

### 5.1 How It Works

1. You make changes to files locally
2. Push to GitHub: `git push origin main`
3. Railway automatically detects the change
4. Auto-deploys new version (1-2 minutes)

### 5.2 Update Your Bot

To add custom commands or make changes:

```bash
# 1. Make changes to bot.js or other files
# 2. Commit changes
git add .
git commit -m "Add new custom commands"

# 3. Push to GitHub
git push origin main

# 4. Railway automatically deploys!
# Watch the deployment in Railway dashboard
```

### 5.3 Disable Auto-Deploy (if needed)

1. In Railway dashboard, click your project
2. Click **"Settings"**
3. Find **"Auto Deploy"**
4. Toggle off if you don't want auto-deploys

---

## 🔧 Troubleshooting

### Bot Not Responding

**Problem:** Bot is deployed but doesn't respond to `/help`

**Solutions:**
1. Check Discord token is correct in Railway variables
2. Verify bot token isn't expired (regenerate if needed)
3. Ensure bot is in your Discord server
4. Wait 5-10 minutes for slash commands to register
5. Check Railway logs for errors

**View Logs:**
1. Railway dashboard → Your project → bot service
2. Click **"Logs"** tab
3. Look for error messages

### Dashboard Not Loading

**Problem:** Website shows blank or error

**Solutions:**
1. Make sure you're using the correct Railway URL
2. Check if bot service is running (should be green)
3. Wait for deployment to complete
4. Refresh browser (Ctrl+F5)
5. Check browser console for errors (F12)

### Deployment Failed

**Problem:** Shows red error during deployment

**Solutions:**
1. Click the deployment to see error details
2. Common issues:
   - Missing dependencies (check package.json)
   - Wrong Node.js version (should be auto-detected)
   - File syntax errors (check bot.js)
3. Fix locally, push to GitHub, Railway will retry

### Port Issues

**Problem:** Bot works locally but not on Railway

**Solutions:**
1. Make sure PORT is set to 3000 in Railway variables
2. Or use PORT=process.env.PORT||3000 in code
3. Verify Express server is listening on process.env.PORT

---

## 📊 Monitoring Your Bot

### 1. View Logs

1. Railway dashboard → Your project → bot service
2. Click **"Logs"** tab
3. See real-time bot activity
4. Search logs for errors or specific text

### 2. Check Metrics

1. Click **"Metrics"** tab
2. View CPU usage, memory, network
3. Make sure bot isn't crashing repeatedly

### 3. Monitor Deployments

1. Click **"Deployments"** tab
2. See history of all deployments
3. Click any deployment to see details/logs

---

## 🔐 Security Best Practices

### 1. Protect Your Token

- ✅ Railway securely stores your DISCORD_TOKEN
- ✅ Token is encrypted at rest
- ✅ You can't view it after saving (by design)
- ✅ Token is injected at runtime only

### 2. Rotate Token Periodically

1. If you think token is compromised:
   - Discord Developer Portal → Bot → "Reset Token"
   - Update in Railway variables
   - Redeploy

### 3. Use Environment Variables

✅ Good (safe):
```
DISCORD_TOKEN stored in Railway variables
```

❌ Bad (unsafe):
```
DISCORD_TOKEN hardcoded in bot.js
```

### 4. Keep Code Private (Optional)

1. Make your GitHub repo private
2. Only you can see the code
3. Railway can still access and deploy

---

## 📈 Scaling Your Bot

### As Your Bot Grows

**Free Tier Works For:**
- Up to 100 servers
- Up to 10,000 users
- Normal command volume
- Learning and testing

**Upgrade When You Need:**
- More uptime guarantee
- More servers (200+)
- Dedicated resources
- Database storage

### Upgrade Process

1. Railway dashboard → Settings
2. Click **"Plan"** or **"Billing"**
3. Choose payment tier
4. Billing is pay-as-you-go (~$7/month typical)

---

## 🆘 Getting Help

### Railway Support

- **Documentation:** https://docs.railway.app
- **Discord Community:** https://discord.gg/railway
- **Status Page:** https://status.railway.app

### For MultiBot Specific Issues

- Check README.md in your bot files
- Review the other deployment guides
- Check bot.js for configuration issues

---

## ✅ Deployment Checklist

Before considering deployment complete:

- [ ] GitHub repository created
- [ ] Bot files uploaded to GitHub
- [ ] Railway project created
- [ ] Environment variables added:
  - [ ] DISCORD_TOKEN
  - [ ] CLIENT_ID
  - [ ] PORT=3000
- [ ] Deployment completed (green checkmark)
- [ ] Bot appears Online in Discord
- [ ] `/help` command works
- [ ] Dashboard loads at Railway URL
- [ ] Statistics update in real-time

---

## 🎯 Next Steps After Deployment

### Immediate

1. ✅ Test bot thoroughly
2. ✅ Verify dashboard works
3. ✅ Check logs for errors
4. ✅ Monitor metrics

### Short Term

1. Invite bot to more servers
2. Customize commands for your use
3. Add custom branding
4. Tell friends about your bot

### Long Term

1. Add database (MongoDB/PostgreSQL)
2. Implement advanced features
3. Add persistence for stats
4. Consider upgrading plan if needed

---

## 📞 Quick Reference

**Important URLs:**
- Railway Dashboard: https://railway.app
- Discord Dev Portal: https://discord.com/developers
- Your Bot Dashboard: `https://your-railway-url.up.railway.app`

**Commands:**
```bash
# Make changes locally, then push:
git add .
git commit -m "Changes"
git push origin main

# Railway auto-deploys in 1-2 minutes
```

**In Railway Dashboard:**
- View logs: Logs tab
- Check metrics: Metrics tab
- See deployments: Deployments tab
- Manage variables: Variables tab

---

## 🎉 You're Done!

Your MultiBot is now live on Railway with:
- ✅ 1,000+ commands
- ✅ Beautiful dashboard
- ✅ Real-time statistics
- ✅ 24/7 availability
- ✅ Auto-deploy from GitHub
- ✅ Professional hosting

**Your bot is accessible 24/7 to users worldwide!**

---

## 📝 Additional Resources

- **Railway Docs:** https://docs.railway.app
- **Discord.js Docs:** https://discord.js.org
- **Node.js Docs:** https://nodejs.org/docs
- **Railway Pricing:** https://railway.app/pricing

---

## 🚀 Quick Deploy Summary

1. Create GitHub repo
2. Upload bot files
3. Sign up for Railway
4. Connect GitHub repo to Railway
5. Add environment variables
6. Deploy
7. Test bot
8. Access dashboard

**Total time: ~15 minutes**

Your MultiBot is now hosted professionally on Railway! 🎉

---

**Questions?** Check the other deployment guides or Railway documentation.

**Need more features?** See README.md for customization guide.

**Want to scale?** See DEPLOYMENT.md for advanced options.

Happy hosting! 🤖

---

© 2024 MultiBot - MIT Licensed

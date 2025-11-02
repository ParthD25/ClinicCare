# Cloudflare Deployment Guide

## 🚀 Deploying ClinicCare+ to Cloudflare

### Option 1: Cloudflare Pages (Recommended for Web Portal)

1. **Connect to GitHub:**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub account
   - Select the `ClinicCare` repository

2. **Configure Build Settings:**
   ```
   Build command: cd frontend/web && npm run build
   Build output directory: frontend/web/.next
   Root directory: frontend/web
   ```

3. **Set Environment Variables:**
   ```
   NEXT_PUBLIC_API_URL = https://your-backend-url.com
   ```

4. **Deploy:**
   - Cloudflare will automatically build and deploy on every push to main

### Option 2: Manual Wrangler Deploy

```bash
# Install wrangler (already done)
npm install -g wrangler

# Login to Cloudflare
wrangler auth login

# Deploy
cd frontend/web
wrangler pages deploy .next --project-name cliniccare-web
```

## 🗄️ Backend Deployment (FastAPI)

**Cloudflare Workers don't support Python**, so deploy your FastAPI backend elsewhere:

### Recommended: Railway
1. Go to [Railway.app](https://railway.app)
2. Connect your GitHub repo
3. Set root directory to `backend/api`
4. Add environment variable: `DATABASE_URL=sqlite:///./cliniccare_plus.db`
5. Deploy

### Alternative: Render
1. Go to [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repo
4. Set build command: `pip install -r requirements.txt`
5. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

## 📱 Mobile App Deployment

Deploy to app stores:
- **iOS**: App Store Connect
- **Android**: Google Play Console

Build commands:
```bash
cd frontend/mobile
npx expo build:ios
npx expo build:android
```

## 🔧 Troubleshooting

**Build fails?**
- Check that all dependencies are in `package.json`
- Ensure Next.js config has `output: 'export'`
- Verify API URLs use environment variables

**API not working?**
- Update `NEXT_PUBLIC_API_URL` with your deployed backend URL
- Check CORS settings on your backend

**Database issues?**
- For production, consider PostgreSQL instead of SQLite
- Use Cloudflare D1 for serverless database
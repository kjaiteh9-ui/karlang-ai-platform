# 🚀 Deployment Guide — Karlang AI Platform

## Option 1: Vercel (Recommended — Free, 30 seconds)

### Step 1 — Push to GitHub
1. Go to github.com → New Repository → name it `karlang-ai-platform`
2. Run in your terminal:
```bash
cd "/Users/karlangdiate/Desktop/AI AGENT AND AUTOMATION_n8n/karlang-ai-platform"
git remote add origin https://github.com/YOUR_USERNAME/karlang-ai-platform.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to **vercel.com** → Sign up/Login with GitHub
2. Click **"Add New Project"**
3. Import your `karlang-ai-platform` repo
4. Add these **Environment Variables**:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |
| `OPENAI_API_KEY` | Your OpenAI API key |
| `NEXT_PUBLIC_SITE_URL` | Your Vercel URL (add after deploy) |

5. Click **Deploy** → Done! 🎉

**Your live URL:** `https://karlang-ai-platform.vercel.app`

---

## Option 2: Vercel CLI (if you prefer terminal)

```bash
cd "/Users/karlangdiate/Desktop/AI AGENT AND AUTOMATION_n8n/karlang-ai-platform"
npx vercel login     # Opens browser for auth
npx vercel --prod    # Deploys to production
```

---

## Option 3: Netlify (Alternative Free Host)

1. Go to **app.netlify.com** → Add new site → Import from Git
2. Connect your GitHub repo
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables (same as above)
6. Deploy

---

## Database Setup (Supabase)

1. Go to **supabase.com** → New Project
2. Go to **SQL Editor** → Run the contents of `supabase-schema.sql`
3. Copy your project URL and keys from **Settings → API**
4. Add them to Vercel environment variables

---

## After Deployment

- Site: `https://karlang-ai-platform.vercel.app`
- Command Center: `/dashboard`
- AI Agents: `/agents`
- Admin Panel: `/admin`
- API Chat: `POST /api/chat`

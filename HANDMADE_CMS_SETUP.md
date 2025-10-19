# Handmade CMS Setup Guide

## Overview
This guide will help you set up Strapi CMS for the Handmade section of your portfolio.

## Prerequisites
- Node.js 18+ installed
- PostgreSQL or SQLite for database
- Basic understanding of Strapi

## Quick Start

### 1. Install Strapi

```bash
# Create a new Strapi project
npx create-strapi-app@latest handmade-cms --quickstart

# Or with specific database
npx create-strapi-app@latest handmade-cms \
  --dbclient=postgres \
  --dbhost=localhost \
  --dbport=5432 \
  --dbname=handmade \
  --dbusername=your_username \
  --dbpassword=your_password
```

### 2. Create Content Types

After Strapi starts, go to **Content-Type Builder** and create the following:

#### Category (Collection Type)
- **name**: Text (Short text, Required, Unique)
- **slug**: UID (Attached to name, Required, Unique)
- **description**: Text (Long text)
- **icon**: Text (Short text)
- **order**: Number (Integer)

#### Tag (Collection Type)
- **name**: Text (Short text, Required, Unique)
- **slug**: UID (Attached to name, Required, Unique)

#### Post (Collection Type)
- **title**: Text (Short text, Required)
- **slug**: UID (Attached to title, Required, Unique)
- **description**: Text (Long text, Required)
- **content**: Rich text (Required)
- **difficulty**: Enumeration (Beginner, Intermediate, Advanced)
- **estimatedTime**: Text (Short text)
- **category**: Relation (Many-to-one with Category)
- **tags**: Relation (Many-to-many with Tag)
- **images**: Media (Multiple files)
- **chartImage**: Media (Single file)
- **materials**: Component (Repeatable)
  - Create component first: **Material**
    - **name**: Text (Short text, Required)
    - **quantity**: Text (Short text)
    - **notes**: Text (Long text)
- **featured**: Boolean (Default: false)
- **likesCount**: Number (Integer, Default: 0)
- **viewsCount**: Number (Integer, Default: 0)

Enable **Draft & Publish** for Posts.

#### Review (Collection Type)
- **post**: Relation (Many-to-one with Post)
- **author**: Text (Short text, Required)
- **email**: Email
- **rating**: Number (Integer, Required, Min: 1, Max: 5)
- **comment**: Text (Long text, Required)
- **helpful**: Number (Integer, Default: 0)
- **approved**: Boolean (Default: false)

Enable **Draft & Publish** for Reviews.

#### Comment (Collection Type)
- **post**: Relation (Many-to-one with Post)
- **author**: Text (Short text, Required)
- **email**: Email
- **comment**: Text (Long text, Required)
- **parentComment**: Relation (Many-to-one with Comment, optional)
- **approved**: Boolean (Default: false)

Enable **Draft & Publish** for Comments.

### 3. Set Permissions

Go to **Settings > Users & Permissions > Roles > Public**

Enable these permissions:
- **Category**: find, findOne
- **Post**: find, findOne, update (for likes/views)
- **Tag**: find, findOne
- **Review**: find, create, update (for helpful count)
- **Comment**: find, create

### 4. Create API Token

1. Go to **Settings > API Tokens**
2. Click **Create new API Token**
3. Name: "Next.js Frontend"
4. Token type: **Read-Only** (or Full Access if you need write operations)
5. Token duration: **Unlimited**
6. Copy the token (you won't see it again!)

### 5. Configure Next.js

Create `.env.local` in your Next.js project:

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_USE_CMS=true
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337/api
NEXT_PUBLIC_CMS_API_TOKEN=your-api-token-here
```

### 6. Add Sample Data

#### Categories
1. **Crochet**
   - slug: `crochet`
   - icon: `Scissors`
   - order: 1

2. **Cooking**
   - slug: `cooking`
   - icon: `ChefHat`
   - order: 2

#### Tags
Create tags like: `amigurumi`, `bear`, `beginner-friendly`, `vietnamese`, `soup`, `italian`, `pizza`, etc.

#### Posts
Import your existing posts from the mock data or create new ones through the Strapi admin panel.

### 7. Test the Integration

```bash
# Start Strapi (in handmade-cms directory)
npm run develop

# Start Next.js (in your portfolio directory)
npm run dev
```

Visit `http://localhost:3001/handmade` and verify data is loading from Strapi.

## Development Workflow

### Using Mock Data (Development)
```env
NEXT_PUBLIC_USE_CMS=false
```
The app will use mock data from `src/lib/mockData.js`.

### Using CMS (Production)
```env
NEXT_PUBLIC_USE_CMS=true
NEXT_PUBLIC_CMS_API_URL=https://your-cms-domain.com/api
NEXT_PUBLIC_CMS_API_TOKEN=your-production-token
```

## Deployment

### Deploy Strapi

**Option 1: Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

**Option 2: Heroku**
```bash
# Install Heroku CLI and deploy
heroku create handmade-cms
git push heroku main
```

**Option 3: DigitalOcean App Platform**
- Connect your Git repository
- Configure build and run commands
- Add environment variables

### Deploy Next.js

Update your production environment variables in Vercel/Netlify:
```env
NEXT_PUBLIC_USE_CMS=true
NEXT_PUBLIC_CMS_API_URL=https://your-cms-domain.com/api
NEXT_PUBLIC_CMS_API_TOKEN=your-production-token
```

## API Usage Examples

### Fetch Posts
```javascript
import { getPosts } from '@/lib/dataProvider';

// Get all posts
const posts = await getPosts();

// Filter by category
const crochetPosts = await getPosts({ category: 'crochet' });

// Search
const searchResults = await getPosts({ search: 'pizza' });
```

### Fetch Single Post
```javascript
import { getPostById } from '@/lib/dataProvider';

const post = await getPostById(1);
```

### Create Review
```javascript
import { createReview } from '@/lib/dataProvider';

await createReview({
  postId: 1,
  author: 'John Doe',
  email: 'john@example.com',
  rating: 5,
  comment: 'Great pattern!',
});
```

## Troubleshooting

### CMS Not Connecting
1. Check if Strapi is running: `http://localhost:1337/admin`
2. Verify API token is correct
3. Check CORS settings in Strapi (`config/middlewares.js`)
4. Check browser console for errors

### Images Not Loading
1. Verify images are uploaded in Strapi
2. Check image permissions in Strapi
3. Update image URLs if using different domain

### Data Not Updating
1. Clear Next.js cache: `rm -rf .next`
2. Check if content is published in Strapi
3. Verify API permissions

## Advanced Configuration

### Enable Image Optimization
In `next.config.mjs`:
```javascript
const nextConfig = {
  images: {
    domains: ['localhost', 'your-cms-domain.com'],
  },
};
```

### Add Caching
```javascript
// In cms.js
const response = await fetch(url, {
  ...options,
  next: { revalidate: 300 }, // Cache for 5 minutes
});
```

### Add Search Indexing
Consider using:
- Algolia for advanced search
- MeiliSearch for self-hosted search
- Strapi's built-in search

## Security Best Practices

1. **Never commit `.env.local`** - it's in `.gitignore`
2. **Use Read-Only tokens** for frontend
3. **Enable rate limiting** in Strapi
4. **Use HTTPS** in production
5. **Implement CORS** properly
6. **Sanitize user input** for reviews/comments
7. **Enable content moderation** (approved field)

## Maintenance

### Backup Database
```bash
# PostgreSQL
pg_dump handmade > backup.sql

# SQLite
cp .tmp/data.db backup.db
```

### Update Strapi
```bash
npm run strapi version
npm install @strapi/strapi@latest
npm run build
```

## Support

- Strapi Documentation: https://docs.strapi.io
- Strapi Discord: https://discord.strapi.io
- API Spec: See `HANDMADE_API_SPEC.md`

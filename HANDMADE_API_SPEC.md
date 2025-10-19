# Handmade CMS API Specification

## Overview
This API specification is designed for Strapi CMS to manage handmade crafts and recipes content.

## Base URL
```
Development: http://localhost:1337/api
Production: https://your-cms-domain.com/api
```

## Authentication
- Use JWT Bearer tokens for authenticated requests
- Public endpoints don't require authentication
- Admin endpoints require authentication with appropriate permissions

## Content Types

### 1. Category
Collection for organizing posts by type (Crochet, Cooking, etc.)

**Collection Name:** `categories`

**Fields:**
```json
{
  "name": "string (required, unique)",
  "slug": "string (required, unique)",
  "description": "text",
  "icon": "string (icon name from lucide-react)",
  "order": "integer (for sorting)"
}
```

**Example:**
```json
{
  "id": 1,
  "name": "Crochet",
  "slug": "crochet",
  "description": "Handmade crochet patterns and projects",
  "icon": "Scissors",
  "order": 1
}
```

### 2. Post
Main content type for crafts and recipes

**Collection Name:** `posts`

**Fields:**
```json
{
  "title": "string (required)",
  "slug": "string (required, unique)",
  "description": "text (required)",
  "content": "richtext (pattern/recipe instructions)",
  "difficulty": "enumeration (Beginner, Intermediate, Advanced)",
  "estimatedTime": "string (e.g., '4-6 hours')",
  "category": "relation (many-to-one with categories)",
  "tags": "relation (many-to-many with tags)",
  "images": "media (multiple)",
  "chartImage": "media (single, optional)",
  "materials": "component (repeatable)",
  "featured": "boolean",
  "publishedAt": "datetime",
  "likesCount": "integer (default: 0)",
  "viewsCount": "integer (default: 0)"
}
```

**Materials Component:**
```json
{
  "name": "string (required)",
  "quantity": "string (optional)",
  "notes": "text (optional)"
}
```

**Example:**
```json
{
  "id": 1,
  "title": "Cute Amigurumi Bear",
  "slug": "cute-amigurumi-bear",
  "description": "Adorable handmade crochet bear perfect for gifts or decoration",
  "content": "**Round 1:** Magic ring, 6 sc in ring (6)...",
  "difficulty": "Beginner",
  "estimatedTime": "4-6 hours",
  "category": {
    "id": 1,
    "name": "Crochet",
    "slug": "crochet"
  },
  "tags": [
    { "id": 1, "name": "amigurumi" },
    { "id": 2, "name": "bear" }
  ],
  "images": [
    {
      "id": 1,
      "url": "/uploads/bear_1.jpg",
      "alternativeText": "Amigurumi bear front view",
      "width": 800,
      "height": 800
    }
  ],
  "chartImage": {
    "id": 2,
    "url": "/uploads/bear_chart.jpg"
  },
  "materials": [
    {
      "id": 1,
      "name": "Yarn (brown, white)",
      "quantity": "100g",
      "notes": "Worsted weight"
    }
  ],
  "featured": false,
  "publishedAt": "2025-01-15T10:00:00.000Z",
  "likesCount": 234,
  "viewsCount": 1523
}
```

### 3. Tag
Tags for categorizing and searching posts

**Collection Name:** `tags`

**Fields:**
```json
{
  "name": "string (required, unique)",
  "slug": "string (required, unique)",
  "posts": "relation (many-to-many with posts)"
}
```

### 4. Review
User reviews and ratings for posts

**Collection Name:** `reviews`

**Fields:**
```json
{
  "post": "relation (many-to-one with posts)",
  "author": "string (required)",
  "email": "email (optional, not displayed)",
  "rating": "integer (1-5, required)",
  "comment": "text (required)",
  "helpful": "integer (default: 0)",
  "approved": "boolean (default: false)",
  "publishedAt": "datetime"
}
```

### 5. Comment
Comments and discussions on posts

**Collection Name:** `comments`

**Fields:**
```json
{
  "post": "relation (many-to-one with posts)",
  "author": "string (required)",
  "email": "email (optional, not displayed)",
  "comment": "text (required)",
  "parentComment": "relation (many-to-one with comments, optional)",
  "approved": "boolean (default: false)",
  "publishedAt": "datetime"
}
```

## API Endpoints

### Categories

#### Get All Categories
```
GET /categories
Query Parameters:
  - sort: string (e.g., "order:asc")
  - populate: string (e.g., "posts")
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Crochet",
        "slug": "crochet",
        "description": "Handmade crochet patterns",
        "icon": "Scissors",
        "order": 1
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 2
    }
  }
}
```

### Posts

#### Get All Posts
```
GET /posts
Query Parameters:
  - filters[category][slug][$eq]: string (filter by category)
  - filters[title][$containsi]: string (search in title)
  - filters[description][$containsi]: string (search in description)
  - filters[tags][name][$in]: array (filter by tags)
  - filters[difficulty][$eq]: string (filter by difficulty)
  - populate: string (e.g., "category,tags,images")
  - sort: string (e.g., "publishedAt:desc")
  - pagination[page]: integer
  - pagination[pageSize]: integer
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Cute Amigurumi Bear",
        "slug": "cute-amigurumi-bear",
        "description": "Adorable handmade crochet bear",
        "difficulty": "Beginner",
        "estimatedTime": "4-6 hours",
        "publishedAt": "2025-01-15T10:00:00.000Z",
        "likesCount": 234,
        "category": {
          "data": {
            "id": 1,
            "attributes": {
              "name": "Crochet",
              "slug": "crochet"
            }
          }
        },
        "tags": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "name": "amigurumi",
                "slug": "amigurumi"
              }
            }
          ]
        },
        "images": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "url": "/uploads/bear_1.jpg",
                "alternativeText": "Bear front view",
                "width": 800,
                "height": 800
              }
            }
          ]
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 6
    }
  }
}
```

#### Get Single Post
```
GET /posts/:id
Query Parameters:
  - populate: string (e.g., "deep" or "category,tags,images,chartImage,materials")
```

**Alternative by slug:**
```
GET /posts?filters[slug][$eq]=cute-amigurumi-bear&populate=deep
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Cute Amigurumi Bear",
      "slug": "cute-amigurumi-bear",
      "description": "Adorable handmade crochet bear",
      "content": "**Round 1:** Magic ring...",
      "difficulty": "Beginner",
      "estimatedTime": "4-6 hours",
      "publishedAt": "2025-01-15T10:00:00.000Z",
      "likesCount": 234,
      "viewsCount": 1523,
      "category": { "data": {...} },
      "tags": { "data": [...] },
      "images": { "data": [...] },
      "chartImage": { "data": {...} },
      "materials": [
        {
          "id": 1,
          "name": "Yarn (brown, white)",
          "quantity": "100g",
          "notes": "Worsted weight"
        }
      ]
    }
  }
}
```

#### Increment Post Likes
```
PUT /posts/:id
Body:
{
  "data": {
    "likesCount": <current_count + 1>
  }
}
```

#### Increment Post Views
```
PUT /posts/:id
Body:
{
  "data": {
    "viewsCount": <current_count + 1>
  }
}
```

### Reviews

#### Get Reviews for Post
```
GET /reviews
Query Parameters:
  - filters[post][id][$eq]: integer
  - filters[approved][$eq]: true
  - sort: string (e.g., "publishedAt:desc")
  - populate: string
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "author": "Sarah M.",
        "rating": 5,
        "comment": "Love this pattern!",
        "helpful": 12,
        "publishedAt": "2025-01-15T10:00:00.000Z"
      }
    }
  ]
}
```

#### Create Review
```
POST /reviews
Body:
{
  "data": {
    "post": 1,
    "author": "John Doe",
    "email": "john@example.com",
    "rating": 5,
    "comment": "Great pattern!",
    "approved": false
  }
}
```

#### Increment Review Helpful Count
```
PUT /reviews/:id
Body:
{
  "data": {
    "helpful": <current_count + 1>
  }
}
```

### Comments

#### Get Comments for Post
```
GET /comments
Query Parameters:
  - filters[post][id][$eq]: integer
  - filters[approved][$eq]: true
  - filters[parentComment][id][$null]: true (for top-level comments)
  - sort: string (e.g., "publishedAt:desc")
  - populate: string (e.g., "parentComment")
```

#### Get Replies for Comment
```
GET /comments
Query Parameters:
  - filters[parentComment][id][$eq]: integer
  - filters[approved][$eq]: true
  - sort: string (e.g., "publishedAt:asc")
```

#### Create Comment
```
POST /comments
Body:
{
  "data": {
    "post": 1,
    "author": "Jane Doe",
    "email": "jane@example.com",
    "comment": "Can I use different yarn?",
    "parentComment": null,
    "approved": false
  }
}
```

### Tags

#### Get All Tags
```
GET /tags
Query Parameters:
  - sort: string (e.g., "name:asc")
```

#### Get Popular Tags
```
GET /tags
Query Parameters:
  - populate: posts
  - sort: string
  - pagination[limit]: integer
```

### Search

#### Global Search
```
GET /posts
Query Parameters:
  - filters[$or][0][title][$containsi]: string
  - filters[$or][1][description][$containsi]: string
  - filters[$or][2][tags][name][$containsi]: string
  - populate: category,tags,images
```

**Example:**
```
GET /posts?filters[$or][0][title][$containsi]=pizza&filters[$or][1][description][$containsi]=pizza&filters[$or][2][tags][name][$containsi]=pizza&populate=category,tags,images
```

## Environment Variables

```env
# CMS API Configuration
NEXT_PUBLIC_CMS_API_URL=http://localhost:1337/api
NEXT_PUBLIC_CMS_API_TOKEN=your-api-token-here

# Optional: For server-side requests
CMS_API_URL=http://localhost:1337/api
CMS_API_TOKEN=your-api-token-here
```

## Strapi Configuration

### Content Type Permissions
Set these permissions for public access (no authentication required):
- **Categories**: find, findOne
- **Posts**: find, findOne
- **Tags**: find, findOne
- **Reviews**: find, create
- **Comments**: find, create

### Plugins to Install
1. **Upload** (built-in) - for image management
2. **Users & Permissions** (built-in) - for API tokens
3. **SEO** (optional) - for meta tags
4. **Sitemap** (optional) - for SEO

### Recommended Settings
- Enable **Draft & Publish** for Posts
- Enable **Internationalization** if multi-language support needed
- Set up **API Token** for secure access
- Configure **CORS** to allow your Next.js domain

## Data Migration

When migrating from mock data to CMS:
1. Create categories first
2. Create tags
3. Create posts with relations
4. Import reviews and comments
5. Upload images and associate with posts

## Rate Limiting
Consider implementing rate limiting for:
- Comment creation: 5 per hour per IP
- Review creation: 3 per day per IP
- Like increments: 10 per hour per IP

## Caching Strategy
- Cache category list (rarely changes)
- Cache post list for 5 minutes
- Cache individual posts for 10 minutes
- Invalidate cache on content update

## Error Responses

```json
{
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Post not found",
    "details": {}
  }
}
```

Common status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

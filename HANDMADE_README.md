# Handmade Crafts Section

## Overview
The handmade section is a dedicated area for sharing crochet patterns and other handmade crafts. It features a modern, Pinterest-style layout with full post details including patterns, charts, reviews, and comments.

## Routes

### Main Handmade Page
- **URL**: `/handmade`
- **Description**: Shows all handmade posts across categories
- **Features**:
  - Category filtering via query params
  - Grid layout of posts
  - Post previews with images, tags, and stats

### Category Filtering
- **URL**: `/handmade?category=crochet`
- **Description**: Filters posts by category (currently supports crochet)
- **Future categories**: knitting, sewing, embroidery, etc.

### Individual Post Page
- **URL**: `/handmade/post/[id]`
- **Description**: Detailed view of a single post
- **Features**:
  - Image gallery with navigation
  - Full pattern instructions
  - Crochet chart diagrams
  - Materials list
  - Difficulty level and time estimate
  - Tags
  - Reviews with ratings
  - Comments with replies
  - Like/Share functionality

## Features

### Search Functionality
The handmade section includes a powerful real-time search feature:
- **Search bar** prominently displayed at the top of the page
- **Searches across**: Post titles, descriptions, tags, and difficulty levels
- **Real-time filtering**: Results update as you type
- **Clear button**: Quick reset with X icon
- **Results counter**: Shows number of matching posts
- **Empty state**: Helpful message when no results found
- **Works with categories**: Search within specific categories or across all posts

Example searches:
- "beginner" - finds all beginner-friendly posts
- "pizza" - finds Italian pizza recipe
- "amigurumi" - finds crochet toy patterns
- "soup" - finds Vietnamese Pho and other soups

### Post Structure
Each post includes:
- **Images**: Multiple product photos with gallery navigation
- **Chart**: Visual stitch diagram for the pattern
- **Pattern**: Step-by-step written instructions
- **Materials**: List of required supplies
- **Metadata**: Difficulty, time estimate, tags
- **Social**: Reviews, comments, likes, shares

### Interactive Elements
- ✅ Image gallery with thumbnails
- ✅ Like button with counter
- ✅ Share menu (Facebook, Twitter, Copy Link)
- ✅ Star ratings
- ✅ Comment system with replies
- ✅ Review system with helpful votes
- ✅ Tag filtering
- ✅ Category navigation
- ✅ Real-time search (title, description, tags, difficulty)

### Responsive Design
- Mobile-friendly grid layout
- Touch-friendly navigation
- Optimized for all screen sizes

## Data Structure

### Post Object
```javascript
{
  id: number,
  title: string,
  description: string,
  images: string[],
  chartImage: string,
  tags: string[],
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
  time: string,
  materials: string[],
  pattern: string,
  reviews: Review[],
  comments: Comment[],
  likes: number
}
```

### Review Object
```javascript
{
  id: number,
  author: string,
  rating: number (1-5),
  comment: string,
  date: string,
  helpful: number
}
```

### Comment Object
```javascript
{
  id: number,
  author: string,
  comment: string,
  date: string,
  replies: Reply[]
}
```

## Future Enhancements

### Planned Features
- [ ] Backend API integration
- [ ] User authentication
- [ ] Post creation/editing interface
- [ ] Image upload functionality
- [ ] Search functionality
- [ ] Advanced filtering (difficulty, time, materials)
- [ ] Favorites/Bookmarks
- [ ] User profiles
- [ ] Pattern PDF downloads
- [ ] Video tutorials
- [ ] More categories (knitting, sewing, etc.)

### Database Schema (Future)
When implementing a backend, consider:
- Posts table
- Users table
- Reviews table
- Comments table
- Tags table
- Categories table
- Likes/Favorites table

## Styling

### Color Scheme
- Primary: Pink to Purple gradient
- Accent: Various pastel colors for categories
- Background: Light gradient (pink/purple/blue)
- Dark mode: Slate with purple accents

### Icons
Using Lucide React icons:
- Scissors: Handmade/Crochet
- Heart: Likes
- MessageCircle: Comments
- Share2: Sharing
- Star: Ratings
- Tag: Tags
- Clock: Time estimate
- Layers: Difficulty

## Navigation
Access the handmade section from:
1. Main portfolio navigation bar (Scissors icon + "Handmade")
2. Direct URL: `/handmade`
3. Category URL: `/handmade?category=crochet`

## Sample Data
Currently using mock data with 3 sample crochet posts:
1. Cute Amigurumi Bear (Beginner)
2. Cozy Granny Square Blanket (Intermediate)
3. Delicate Lace Doily (Advanced)

## Notes
- Images are currently placeholders (gradient backgrounds)
- In production, replace with actual product photos and chart diagrams
- Consider implementing lazy loading for images
- Add SEO metadata for each post
- Implement proper error handling
- Add loading states for async operations

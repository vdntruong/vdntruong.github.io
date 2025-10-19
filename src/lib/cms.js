// CMS API Service Layer
// This file handles all communication with the Strapi CMS

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:1337/api';
const CMS_API_TOKEN = process.env.NEXT_PUBLIC_CMS_API_TOKEN || '';

// Helper function to build query strings
function buildQueryString(params) {
  const searchParams = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => searchParams.append(key, v));
    } else if (value !== null && value !== undefined) {
      searchParams.append(key, value);
    }
  });
  
  return searchParams.toString();
}

// Helper function to make API requests
async function fetchAPI(endpoint, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(CMS_API_TOKEN && { Authorization: `Bearer ${CMS_API_TOKEN}` }),
    ...options.headers,
  };

  const url = `${CMS_API_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('CMS API Error:', error);
    throw error;
  }
}

// Transform Strapi response to our app format
function transformPost(strapiPost) {
  const { id, attributes } = strapiPost;
  
  return {
    id,
    title: attributes.title,
    slug: attributes.slug,
    description: attributes.description,
    content: attributes.content,
    difficulty: attributes.difficulty,
    time: attributes.estimatedTime,
    category: attributes.category?.data ? {
      id: attributes.category.data.id,
      name: attributes.category.data.attributes.name,
      slug: attributes.category.data.attributes.slug,
    } : null,
    tags: attributes.tags?.data?.map(tag => tag.attributes.name) || [],
    images: attributes.images?.data?.map(img => ({
      id: img.id,
      url: img.attributes.url,
      alt: img.attributes.alternativeText,
      width: img.attributes.width,
      height: img.attributes.height,
    })) || [],
    chartImage: attributes.chartImage?.data ? {
      id: attributes.chartImage.data.id,
      url: attributes.chartImage.data.attributes.url,
    } : null,
    materials: attributes.materials || [],
    pattern: attributes.content, // For backward compatibility
    likes: attributes.likesCount || 0,
    views: attributes.viewsCount || 0,
    publishedAt: attributes.publishedAt,
    reviews: [], // Will be loaded separately
    comments: [], // Will be loaded separately
  };
}

function transformReview(strapiReview) {
  const { id, attributes } = strapiReview;
  
  return {
    id,
    author: attributes.author,
    rating: attributes.rating,
    comment: attributes.comment,
    helpful: attributes.helpful || 0,
    date: new Date(attributes.publishedAt).toISOString().split('T')[0],
  };
}

function transformComment(strapiComment) {
  const { id, attributes } = strapiComment;
  
  return {
    id,
    author: attributes.author,
    comment: attributes.comment,
    date: new Date(attributes.publishedAt).toISOString().split('T')[0],
    replies: [], // Will be populated separately
  };
}

// ==================== CATEGORIES ====================

export async function getCategories() {
  try {
    const query = buildQueryString({
      'sort': 'order:asc',
    });
    
    const response = await fetchAPI(`/categories?${query}`);
    
    return response.data.map(cat => ({
      id: cat.id,
      name: cat.attributes.name,
      slug: cat.attributes.slug,
      icon: cat.attributes.icon,
      description: cat.attributes.description,
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// ==================== POSTS ====================

export async function getPosts(filters = {}) {
  try {
    const params = {
      'populate': 'category,tags,images',
      'sort': 'publishedAt:desc',
      'pagination[pageSize]': 100,
    };

    // Category filter
    if (filters.category) {
      params['filters[category][slug][$eq]'] = filters.category;
    }

    // Search filter
    if (filters.search) {
      params['filters[$or][0][title][$containsi]'] = filters.search;
      params['filters[$or][1][description][$containsi]'] = filters.search;
      params['filters[$or][2][tags][name][$containsi]'] = filters.search;
      params['filters[$or][3][difficulty][$containsi]'] = filters.search;
    }

    // Difficulty filter
    if (filters.difficulty) {
      params['filters[difficulty][$eq]'] = filters.difficulty;
    }

    const query = buildQueryString(params);
    const response = await fetchAPI(`/posts?${query}`);
    
    return response.data.map(transformPost);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostById(id) {
  try {
    const query = buildQueryString({
      'populate': 'deep',
    });
    
    const response = await fetchAPI(`/posts/${id}?${query}`);
    const post = transformPost(response.data);
    
    // Fetch reviews and comments
    const [reviews, comments] = await Promise.all([
      getReviewsForPost(id),
      getCommentsForPost(id),
    ]);
    
    post.reviews = reviews;
    post.comments = comments;
    
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getPostBySlug(slug) {
  try {
    const query = buildQueryString({
      'filters[slug][$eq]': slug,
      'populate': 'deep',
    });
    
    const response = await fetchAPI(`/posts?${query}`);
    
    if (response.data.length === 0) {
      return null;
    }
    
    const post = transformPost(response.data[0]);
    
    // Fetch reviews and comments
    const [reviews, comments] = await Promise.all([
      getReviewsForPost(post.id),
      getCommentsForPost(post.id),
    ]);
    
    post.reviews = reviews;
    post.comments = comments;
    
    return post;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function incrementPostLikes(postId, currentCount) {
  try {
    await fetchAPI(`/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        data: {
          likesCount: currentCount + 1,
        },
      }),
    });
    return true;
  } catch (error) {
    console.error('Error incrementing likes:', error);
    return false;
  }
}

export async function incrementPostViews(postId, currentCount) {
  try {
    await fetchAPI(`/posts/${postId}`, {
      method: 'PUT',
      body: JSON.stringify({
        data: {
          viewsCount: currentCount + 1,
        },
      }),
    });
    return true;
  } catch (error) {
    console.error('Error incrementing views:', error);
    return false;
  }
}

// ==================== REVIEWS ====================

export async function getReviewsForPost(postId) {
  try {
    const query = buildQueryString({
      'filters[post][id][$eq]': postId,
      'filters[approved][$eq]': true,
      'sort': 'publishedAt:desc',
    });
    
    const response = await fetchAPI(`/reviews?${query}`);
    return response.data.map(transformReview);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export async function createReview(reviewData) {
  try {
    const response = await fetchAPI('/reviews', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          post: reviewData.postId,
          author: reviewData.author,
          email: reviewData.email,
          rating: reviewData.rating,
          comment: reviewData.comment,
          approved: false, // Requires admin approval
        },
      }),
    });
    return response.data;
  } catch (error) {
    console.error('Error creating review:', error);
    throw error;
  }
}

export async function incrementReviewHelpful(reviewId, currentCount) {
  try {
    await fetchAPI(`/reviews/${reviewId}`, {
      method: 'PUT',
      body: JSON.stringify({
        data: {
          helpful: currentCount + 1,
        },
      }),
    });
    return true;
  } catch (error) {
    console.error('Error incrementing review helpful:', error);
    return false;
  }
}

// ==================== COMMENTS ====================

export async function getCommentsForPost(postId) {
  try {
    // Get top-level comments
    const query = buildQueryString({
      'filters[post][id][$eq]': postId,
      'filters[approved][$eq]': true,
      'filters[parentComment][id][$null]': true,
      'sort': 'publishedAt:desc',
    });
    
    const response = await fetchAPI(`/comments?${query}`);
    const comments = response.data.map(transformComment);
    
    // Get replies for each comment
    await Promise.all(
      comments.map(async (comment) => {
        comment.replies = await getRepliesForComment(comment.id);
      })
    );
    
    return comments;
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

export async function getRepliesForComment(commentId) {
  try {
    const query = buildQueryString({
      'filters[parentComment][id][$eq]': commentId,
      'filters[approved][$eq]': true,
      'sort': 'publishedAt:asc',
    });
    
    const response = await fetchAPI(`/comments?${query}`);
    return response.data.map(transformComment);
  } catch (error) {
    console.error('Error fetching replies:', error);
    return [];
  }
}

export async function createComment(commentData) {
  try {
    const response = await fetchAPI('/comments', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          post: commentData.postId,
          author: commentData.author,
          email: commentData.email,
          comment: commentData.comment,
          parentComment: commentData.parentCommentId || null,
          approved: false, // Requires admin approval
        },
      }),
    });
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error);
    throw error;
  }
}

// ==================== TAGS ====================

export async function getTags() {
  try {
    const query = buildQueryString({
      'sort': 'name:asc',
    });
    
    const response = await fetchAPI(`/tags?${query}`);
    
    return response.data.map(tag => ({
      id: tag.id,
      name: tag.attributes.name,
      slug: tag.attributes.slug,
    }));
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

// ==================== MOCK DATA FALLBACK ====================

// Check if CMS is available
export async function isCMSAvailable() {
  try {
    await fetchAPI('/categories?pagination[limit]=1');
    return true;
  } catch (error) {
    return false;
  }
}

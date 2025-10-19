// Data Provider - switches between CMS API and mock data
import * as cms from './cms';
import { mockCategories, mockPosts } from './mockData';

// Check if we should use CMS or mock data
const USE_CMS = process.env.NEXT_PUBLIC_USE_CMS === 'true';

// ==================== CATEGORIES ====================

export async function getCategories() {
  if (!USE_CMS) {
    return mockCategories;
  }
  
  try {
    return await cms.getCategories();
  } catch (error) {
    console.warn('CMS unavailable, falling back to mock data');
    return mockCategories;
  }
}

// ==================== POSTS ====================

export async function getPosts(filters = {}) {
  if (!USE_CMS) {
    // Apply filters to mock data
    let posts = [...mockPosts];
    
    if (filters.category) {
      posts = posts.filter(post => post.category?.slug === filters.category);
    }
    
    if (filters.search) {
      const query = filters.search.toLowerCase();
      posts = posts.filter(post => {
        return (
          post.title.toLowerCase().includes(query) ||
          post.description.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query)) ||
          post.difficulty.toLowerCase().includes(query)
        );
      });
    }
    
    if (filters.difficulty) {
      posts = posts.filter(post => post.difficulty === filters.difficulty);
    }
    
    return posts;
  }
  
  try {
    return await cms.getPosts(filters);
  } catch (error) {
    console.warn('CMS unavailable, falling back to mock data');
    return getPosts(filters); // Recursive call with USE_CMS = false
  }
}

export async function getPostById(id) {
  if (!USE_CMS) {
    return mockPosts.find(post => post.id === parseInt(id)) || null;
  }
  
  try {
    return await cms.getPostById(id);
  } catch (error) {
    console.warn('CMS unavailable, falling back to mock data');
    return mockPosts.find(post => post.id === parseInt(id)) || null;
  }
}

export async function getPostBySlug(slug) {
  if (!USE_CMS) {
    return mockPosts.find(post => post.slug === slug) || null;
  }
  
  try {
    return await cms.getPostBySlug(slug);
  } catch (error) {
    console.warn('CMS unavailable, falling back to mock data');
    return mockPosts.find(post => post.slug === slug) || null;
  }
}

export async function incrementPostLikes(postId, currentCount) {
  if (!USE_CMS) {
    // In mock mode, just return success (no persistence)
    console.log('Mock mode: Like increment not persisted');
    return true;
  }
  
  try {
    return await cms.incrementPostLikes(postId, currentCount);
  } catch (error) {
    console.error('Error incrementing likes:', error);
    return false;
  }
}

export async function incrementPostViews(postId, currentCount) {
  if (!USE_CMS) {
    // In mock mode, just return success (no persistence)
    return true;
  }
  
  try {
    return await cms.incrementPostViews(postId, currentCount);
  } catch (error) {
    console.error('Error incrementing views:', error);
    return false;
  }
}

// ==================== REVIEWS ====================

export async function getReviewsForPost(postId) {
  if (!USE_CMS) {
    const post = mockPosts.find(p => p.id === parseInt(postId));
    return post?.reviews || [];
  }
  
  try {
    return await cms.getReviewsForPost(postId);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
}

export async function createReview(reviewData) {
  if (!USE_CMS) {
    console.log('Mock mode: Review not persisted', reviewData);
    throw new Error('Reviews cannot be created in mock mode. Please enable CMS.');
  }
  
  return await cms.createReview(reviewData);
}

export async function incrementReviewHelpful(reviewId, currentCount) {
  if (!USE_CMS) {
    console.log('Mock mode: Review helpful increment not persisted');
    return true;
  }
  
  return await cms.incrementReviewHelpful(reviewId, currentCount);
}

// ==================== COMMENTS ====================

export async function getCommentsForPost(postId) {
  if (!USE_CMS) {
    const post = mockPosts.find(p => p.id === parseInt(postId));
    return post?.comments || [];
  }
  
  try {
    return await cms.getCommentsForPost(postId);
  } catch (error) {
    console.error('Error fetching comments:', error);
    return [];
  }
}

export async function createComment(commentData) {
  if (!USE_CMS) {
    console.log('Mock mode: Comment not persisted', commentData);
    throw new Error('Comments cannot be created in mock mode. Please enable CMS.');
  }
  
  return await cms.createComment(commentData);
}

// ==================== TAGS ====================

export async function getTags() {
  if (!USE_CMS) {
    // Extract unique tags from mock posts
    const tagsSet = new Set();
    mockPosts.forEach(post => {
      post.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort().map((tag, index) => ({
      id: index + 1,
      name: tag,
      slug: tag.toLowerCase().replace(/\s+/g, '-'),
    }));
  }
  
  try {
    return await cms.getTags();
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

// ==================== UTILITY ====================

export function isMockMode() {
  return !USE_CMS;
}

export async function checkCMSConnection() {
  if (!USE_CMS) {
    return { connected: false, mode: 'mock' };
  }
  
  const isAvailable = await cms.isCMSAvailable();
  return {
    connected: isAvailable,
    mode: isAvailable ? 'cms' : 'mock-fallback',
  };
}

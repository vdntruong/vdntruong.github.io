'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { Scissors, Heart, MessageCircle, Share2, Tag, Star, ChefHat, Search, X } from 'lucide-react';
import Link from 'next/link';

// Sample data for crochet posts
const crochetPosts = [
  {
    id: 1,
    title: 'Cute Amigurumi Bear',
    description: 'Adorable handmade crochet bear perfect for gifts or decoration',
    images: ['/placeholder-bear.jpg', '/placeholder-bear-2.jpg'],
    chartImage: '/placeholder-chart.jpg',
    tags: ['amigurumi', 'bear', 'beginner-friendly', 'toy'],
    difficulty: 'Beginner',
    time: '4-6 hours',
    materials: ['Yarn (brown, white)', '3.5mm crochet hook', 'Safety eyes', 'Stuffing'],
    reviews: [
      { id: 1, author: 'Sarah M.', rating: 5, comment: 'Love this pattern! So easy to follow.', date: '2025-01-15' },
      { id: 2, author: 'Mike T.', rating: 4, comment: 'Great for beginners. Turned out perfect!', date: '2025-01-10' }
    ],
    comments: [
      { id: 1, author: 'Jane D.', comment: 'Can I use a different yarn weight?', date: '2025-01-20', replies: 1 },
      { id: 2, author: 'Lisa K.', comment: 'This is so cute! Making one now.', date: '2025-01-18', replies: 0 }
    ]
  },
  {
    id: 2,
    title: 'Cozy Granny Square Blanket',
    description: 'Classic granny square blanket pattern with modern color combinations',
    images: ['/placeholder-blanket.jpg'],
    chartImage: '/placeholder-blanket-chart.jpg',
    tags: ['blanket', 'granny-square', 'intermediate', 'home-decor'],
    difficulty: 'Intermediate',
    time: '20-30 hours',
    materials: ['Worsted weight yarn (multiple colors)', '5mm crochet hook', 'Yarn needle'],
    reviews: [
      { id: 1, author: 'Emma R.', rating: 5, comment: 'Beautiful pattern! Love the color suggestions.', date: '2025-01-12' }
    ],
    comments: [
      { id: 1, author: 'Tom B.', comment: 'What size does this make?', date: '2025-01-19', replies: 2 }
    ]
  },
  {
    id: 3,
    title: 'Delicate Lace Doily',
    description: 'Elegant vintage-style lace doily for table decoration',
    images: ['/placeholder-doily.jpg'],
    chartImage: '/placeholder-doily-chart.jpg',
    tags: ['doily', 'lace', 'advanced', 'vintage', 'home-decor'],
    difficulty: 'Advanced',
    time: '8-12 hours',
    materials: ['Cotton thread size 10', '1.5mm steel hook', 'Starch (for blocking)'],
    reviews: [
      { id: 1, author: 'Patricia W.', rating: 5, comment: 'Challenging but worth it! Stunning result.', date: '2025-01-08' }
    ],
    comments: []
  }
];

// Sample data for cooking/dishes posts
const cookingPosts = [
  {
    id: 4,
    title: 'Vietnamese Pho Bo',
    description: 'Authentic Vietnamese beef noodle soup with aromatic broth and fresh herbs',
    images: ['/placeholder-pho.jpg', '/placeholder-pho-2.jpg'],
    chartImage: '/placeholder-pho-steps.jpg',
    tags: ['vietnamese', 'soup', 'beef', 'comfort-food', 'traditional'],
    difficulty: 'Intermediate',
    time: '3-4 hours',
    materials: ['Beef bones', 'Rice noodles', 'Star anise', 'Cinnamon', 'Fresh herbs (basil, cilantro)', 'Lime', 'Bean sprouts', 'Beef slices'],
    reviews: [
      { id: 1, author: 'David L.', rating: 5, comment: 'Best pho recipe I\'ve tried! The broth is incredible.', date: '2025-01-18' },
      { id: 2, author: 'Mai N.', rating: 5, comment: 'Tastes just like home! Authentic and delicious.', date: '2025-01-14' }
    ],
    comments: [
      { id: 1, author: 'Chris P.', comment: 'Can I use chicken instead of beef?', date: '2025-01-21', replies: 1 },
      { id: 2, author: 'Anna K.', comment: 'Made this yesterday, family loved it!', date: '2025-01-19', replies: 0 }
    ]
  },
  {
    id: 5,
    title: 'Japanese Ramen Bowl',
    description: 'Rich tonkotsu ramen with perfectly cooked noodles and toppings',
    images: ['/placeholder-ramen.jpg'],
    chartImage: '/placeholder-ramen-steps.jpg',
    tags: ['japanese', 'ramen', 'noodles', 'pork', 'comfort-food'],
    difficulty: 'Advanced',
    time: '8-10 hours',
    materials: ['Pork bones', 'Ramen noodles', 'Soy sauce', 'Mirin', 'Soft-boiled eggs', 'Green onions', 'Nori', 'Bamboo shoots'],
    reviews: [
      { id: 1, author: 'Kevin W.', rating: 5, comment: 'Restaurant quality! Worth the time investment.', date: '2025-01-16' },
      { id: 2, author: 'Yuki S.', rating: 4, comment: 'Great recipe but very time-consuming.', date: '2025-01-11' }
    ],
    comments: [
      { id: 1, author: 'Mark T.', comment: 'Any shortcuts for the broth?', date: '2025-01-20', replies: 2 }
    ]
  },
  {
    id: 6,
    title: 'Classic Margherita Pizza',
    description: 'Homemade Neapolitan-style pizza with fresh mozzarella and basil',
    images: ['/placeholder-pizza.jpg', '/placeholder-pizza-2.jpg'],
    chartImage: '/placeholder-pizza-steps.jpg',
    tags: ['italian', 'pizza', 'vegetarian', 'beginner-friendly', 'classic'],
    difficulty: 'Beginner',
    time: '2-3 hours (including rise time)',
    materials: ['Pizza dough', 'San Marzano tomatoes', 'Fresh mozzarella', 'Fresh basil', 'Olive oil', 'Salt'],
    reviews: [
      { id: 1, author: 'Tony M.', rating: 5, comment: 'Simple and perfect! Just like in Italy.', date: '2025-01-17' },
      { id: 2, author: 'Rachel B.', rating: 5, comment: 'My kids request this every weekend now!', date: '2025-01-13' }
    ],
    comments: [
      { id: 1, author: 'Sam D.', comment: 'What temperature should I bake this at?', date: '2025-01-22', replies: 1 }
    ]
  }
];

function HandmadeContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'All', slug: null, icon: Scissors },
    { name: 'Crochet', slug: 'crochet', icon: Scissors },
    { name: 'Cooking', slug: 'cooking', icon: ChefHat },
  ];

  // Combine all posts
  const allPosts = [...crochetPosts, ...cookingPosts];
  
  // Filter posts based on category
  let filteredPosts = allPosts;
  if (category === 'crochet') {
    filteredPosts = crochetPosts;
  } else if (category === 'cooking') {
    filteredPosts = cookingPosts;
  }

  // Apply search filter
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredPosts = filteredPosts.filter(post => {
      // Search in title
      if (post.title.toLowerCase().includes(query)) return true;
      // Search in description
      if (post.description.toLowerCase().includes(query)) return true;
      // Search in tags
      if (post.tags.some(tag => tag.toLowerCase().includes(query))) return true;
      // Search in difficulty
      if (post.difficulty.toLowerCase().includes(query)) return true;
      return false;
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              ← Back to Portfolio
            </Link>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Handmade Crafts
            </h1>
            <div className="w-32"></div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, tags, or difficulty..."
              className="w-full pl-12 pr-12 py-3 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = category === cat.slug || (!category && !cat.slug);
              return (
                <Link
                  key={cat.name}
                  href={cat.slug ? `/handmade?category=${cat.slug}` : '/handmade'}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Search Results Info */}
        {searchQuery && (
          <div className="mb-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Found <span className="font-semibold text-purple-600 dark:text-purple-400">{filteredPosts.length}</span> result{filteredPosts.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
            </p>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or browse all posts
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Clear Search
              </button>
            )}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/handmade/post/${post.id}`}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <Scissors className="w-24 h-24" />
                </div>
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.difficulty}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{post.reviews.length > 0 ? (post.reviews.reduce((acc, r) => acc + r.rating, 0) / post.reviews.length).toFixed(1) : 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments.length}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.reviews.length}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function HandmadePage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HandmadeContent />
    </Suspense>
  );
}

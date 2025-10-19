'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, Heart, MessageCircle, Share2, Tag, Star, 
  Clock, Layers, ChevronLeft, ChevronRight, Facebook, 
  Twitter, Link as LinkIcon, Check
} from 'lucide-react';
import Link from 'next/link';

// Sample data (in production, this would come from a database)
const posts = {
  1: {
    id: 1,
    title: 'Cute Amigurumi Bear',
    description: 'Adorable handmade crochet bear perfect for gifts or decoration. This pattern is beginner-friendly and includes detailed step-by-step instructions.',
    images: ['/placeholder-bear.jpg', '/placeholder-bear-2.jpg', '/placeholder-bear-3.jpg'],
    chartImage: '/placeholder-chart.jpg',
    tags: ['amigurumi', 'bear', 'beginner-friendly', 'toy', 'gift-idea'],
    difficulty: 'Beginner',
    time: '4-6 hours',
    materials: [
      'Yarn (brown, white) - worsted weight',
      '3.5mm crochet hook',
      'Safety eyes (12mm)',
      'Polyester stuffing',
      'Yarn needle',
      'Stitch markers'
    ],
    pattern: `
**Round 1:** Magic ring, 6 sc in ring (6)
**Round 2:** Inc in each st around (12)
**Round 3:** *Sc, inc* repeat around (18)
**Round 4:** *2 sc, inc* repeat around (24)
**Round 5-8:** Sc in each st around (24)
**Round 9:** *2 sc, dec* repeat around (18)
**Round 10:** *Sc, dec* repeat around (12)
Stuff firmly
**Round 11:** Dec around (6)
Fasten off and close.
    `,
    reviews: [
      { id: 1, author: 'Sarah M.', rating: 5, comment: 'Love this pattern! So easy to follow. My first amigurumi turned out perfect!', date: '2025-01-15', helpful: 12 },
      { id: 2, author: 'Mike T.', rating: 4, comment: 'Great for beginners. Turned out perfect! Only wish there were video instructions too.', date: '2025-01-10', helpful: 8 },
      { id: 3, author: 'Emma L.', rating: 5, comment: 'Made this for my daughter and she loves it! Clear instructions.', date: '2025-01-05', helpful: 15 }
    ],
    comments: [
      { 
        id: 1, 
        author: 'Jane D.', 
        comment: 'Can I use a different yarn weight? I only have DK weight yarn.', 
        date: '2025-01-20', 
        replies: [
          { id: 1, author: 'Pete', comment: 'Yes! Just adjust your hook size accordingly. DK weight with 3mm hook should work.', date: '2025-01-20' }
        ]
      },
      { 
        id: 2, 
        author: 'Lisa K.', 
        comment: 'This is so cute! Making one now. Thanks for sharing!', 
        date: '2025-01-18', 
        replies: []
      }
    ],
    likes: 234
  },
  2: {
    id: 2,
    title: 'Cozy Granny Square Blanket',
    description: 'Classic granny square blanket pattern with modern color combinations',
    images: ['/placeholder-blanket.jpg', '/placeholder-blanket-2.jpg'],
    chartImage: '/placeholder-blanket-chart.jpg',
    tags: ['blanket', 'granny-square', 'intermediate', 'home-decor'],
    difficulty: 'Intermediate',
    time: '20-30 hours',
    materials: ['Worsted weight yarn (multiple colors)', '5mm crochet hook', 'Yarn needle'],
    pattern: 'Pattern details for granny square blanket...',
    reviews: [
      { id: 1, author: 'Emma R.', rating: 5, comment: 'Beautiful pattern! Love the color suggestions.', date: '2025-01-12', helpful: 10 }
    ],
    comments: [
      { 
        id: 1, 
        author: 'Tom B.', 
        comment: 'What size does this make?', 
        date: '2025-01-19', 
        replies: [
          { id: 1, author: 'Pete', comment: 'The finished size is approximately 50x60 inches.', date: '2025-01-19' }
        ]
      }
    ],
    likes: 189
  },
  3: {
    id: 3,
    title: 'Delicate Lace Doily',
    description: 'Elegant vintage-style lace doily for table decoration',
    images: ['/placeholder-doily.jpg'],
    chartImage: '/placeholder-doily-chart.jpg',
    tags: ['doily', 'lace', 'advanced', 'vintage', 'home-decor'],
    difficulty: 'Advanced',
    time: '8-12 hours',
    materials: ['Cotton thread size 10', '1.5mm steel hook', 'Starch (for blocking)'],
    pattern: 'Pattern details for lace doily...',
    reviews: [
      { id: 1, author: 'Patricia W.', rating: 5, comment: 'Challenging but worth it! Stunning result.', date: '2025-01-08', helpful: 7 }
    ],
    comments: [],
    likes: 156
  },
  4: {
    id: 4,
    title: 'Vietnamese Pho Bo',
    description: 'Authentic Vietnamese beef noodle soup with aromatic broth and fresh herbs. This recipe takes time but delivers restaurant-quality results with deep, complex flavors.',
    images: ['/placeholder-pho.jpg', '/placeholder-pho-2.jpg', '/placeholder-pho-3.jpg'],
    chartImage: '/placeholder-pho-steps.jpg',
    tags: ['vietnamese', 'soup', 'beef', 'comfort-food', 'traditional', 'asian'],
    difficulty: 'Intermediate',
    time: '3-4 hours',
    materials: [
      'Beef bones (2-3 lbs)',
      'Rice noodles (bánh phở)',
      'Star anise (3-4 pieces)',
      'Cinnamon stick',
      'Fresh herbs (Thai basil, cilantro)',
      'Lime wedges',
      'Bean sprouts',
      'Beef slices (sirloin or eye round)',
      'Fish sauce',
      'Rock sugar',
      'Onions and ginger'
    ],
    pattern: `
**Step 1: Prepare the Bones**
Parboil beef bones for 5 minutes, then rinse thoroughly to remove impurities.

**Step 2: Toast the Spices**
Dry toast star anise, cinnamon, and coriander seeds until fragrant (2-3 minutes).

**Step 3: Char the Aromatics**
Char onions and ginger over open flame or under broiler until blackened.

**Step 4: Simmer the Broth**
- Add bones to large pot with 4 quarts water
- Add charred onions, ginger, and toasted spices
- Bring to boil, then reduce to gentle simmer
- Skim foam regularly for first 30 minutes
- Simmer for 2-3 hours

**Step 5: Season the Broth**
Add fish sauce, rock sugar, and salt to taste. Strain broth.

**Step 6: Prepare Noodles and Toppings**
Cook rice noodles according to package. Slice beef thinly. Prepare herb plate.

**Step 7: Assemble**
Place noodles in bowl, top with raw beef slices, ladle hot broth over. Serve with herbs, lime, and bean sprouts.
    `,
    reviews: [
      { id: 1, author: 'David L.', rating: 5, comment: 'Best pho recipe I\'ve tried! The broth is incredible.', date: '2025-01-18', helpful: 23 },
      { id: 2, author: 'Mai N.', rating: 5, comment: 'Tastes just like home! Authentic and delicious.', date: '2025-01-14', helpful: 18 },
      { id: 3, author: 'James K.', rating: 4, comment: 'Great recipe! Takes patience but worth it.', date: '2025-01-10', helpful: 12 }
    ],
    comments: [
      { 
        id: 1, 
        author: 'Chris P.', 
        comment: 'Can I use chicken instead of beef?', 
        date: '2025-01-21', 
        replies: [
          { id: 1, author: 'Pete', comment: 'Absolutely! Use chicken bones and adjust cooking time to 1.5-2 hours.', date: '2025-01-21' }
        ]
      },
      { 
        id: 2, 
        author: 'Anna K.', 
        comment: 'Made this yesterday, family loved it!', 
        date: '2025-01-19', 
        replies: []
      }
    ],
    likes: 312
  },
  5: {
    id: 5,
    title: 'Japanese Ramen Bowl',
    description: 'Rich tonkotsu ramen with perfectly cooked noodles and toppings. This recipe creates a creamy, milky broth through extended simmering.',
    images: ['/placeholder-ramen.jpg', '/placeholder-ramen-2.jpg'],
    chartImage: '/placeholder-ramen-steps.jpg',
    tags: ['japanese', 'ramen', 'noodles', 'pork', 'comfort-food', 'asian'],
    difficulty: 'Advanced',
    time: '8-10 hours',
    materials: [
      'Pork bones (trotters and neck)',
      'Ramen noodles',
      'Soy sauce',
      'Mirin',
      'Soft-boiled eggs',
      'Green onions',
      'Nori seaweed',
      'Bamboo shoots',
      'Chashu pork',
      'Garlic and ginger'
    ],
    pattern: `
**Step 1: Prepare Bones**
Blanch pork bones in boiling water for 10 minutes. Rinse thoroughly.

**Step 2: Start the Broth**
- Place bones in large pot, cover with water
- Bring to rolling boil and maintain for 2 hours
- Add more water as needed to keep bones covered
- Continue boiling for 6-8 hours total until broth is milky white

**Step 3: Make Chashu**
- Roll pork belly, tie with string
- Sear all sides until golden
- Braise in soy sauce, mirin, sake, and sugar for 2 hours

**Step 4: Prepare Tare (Seasoning Base)**
Mix soy sauce, mirin, sake, and dashi. This is your flavor concentrate.

**Step 5: Soft-Boil Eggs**
Boil eggs for 6.5 minutes, shock in ice water, marinate in soy mixture.

**Step 6: Assemble**
Cook noodles, place in bowl with tare, ladle hot broth, top with chashu, egg, nori, bamboo shoots, and green onions.
    `,
    reviews: [
      { id: 1, author: 'Kevin W.', rating: 5, comment: 'Restaurant quality! Worth the time investment.', date: '2025-01-16', helpful: 28 },
      { id: 2, author: 'Yuki S.', rating: 4, comment: 'Great recipe but very time-consuming.', date: '2025-01-11', helpful: 15 }
    ],
    comments: [
      { 
        id: 1, 
        author: 'Mark T.', 
        comment: 'Any shortcuts for the broth?', 
        date: '2025-01-20', 
        replies: [
          { id: 1, author: 'Pete', comment: 'You can use a pressure cooker to reduce time to 3-4 hours, but traditional method gives better results.', date: '2025-01-20' }
        ]
      }
    ],
    likes: 267
  },
  6: {
    id: 6,
    title: 'Classic Margherita Pizza',
    description: 'Homemade Neapolitan-style pizza with fresh mozzarella and basil. Simple ingredients, perfect technique.',
    images: ['/placeholder-pizza.jpg', '/placeholder-pizza-2.jpg', '/placeholder-pizza-3.jpg'],
    chartImage: '/placeholder-pizza-steps.jpg',
    tags: ['italian', 'pizza', 'vegetarian', 'beginner-friendly', 'classic'],
    difficulty: 'Beginner',
    time: '2-3 hours (including rise time)',
    materials: [
      'Pizza dough (or 500g bread flour)',
      'San Marzano tomatoes (crushed)',
      'Fresh mozzarella cheese',
      'Fresh basil leaves',
      'Extra virgin olive oil',
      'Salt',
      'Active dry yeast',
      'Sugar'
    ],
    pattern: `
**Step 1: Make the Dough**
- Mix 500g flour, 325ml warm water, 10g salt, 7g yeast, 1 tsp sugar
- Knead for 10 minutes until smooth and elastic
- Let rise for 1-2 hours until doubled

**Step 2: Prepare the Sauce**
- Crush San Marzano tomatoes by hand
- Add pinch of salt and drizzle of olive oil
- No cooking needed!

**Step 3: Shape the Dough**
- Divide dough into 2-3 portions
- Stretch by hand, working from center outward
- Leave thicker edge for crust

**Step 4: Top the Pizza**
- Spread thin layer of tomato sauce
- Tear fresh mozzarella, distribute evenly
- Drizzle with olive oil

**Step 5: Bake**
- Preheat oven to maximum (500-550°F / 260-290°C)
- Bake for 8-12 minutes until crust is golden and cheese bubbles
- Add fresh basil leaves immediately after removing from oven

**Step 6: Serve**
Drizzle with olive oil, let cool for 1 minute, slice and enjoy!
    `,
    reviews: [
      { id: 1, author: 'Tony M.', rating: 5, comment: 'Simple and perfect! Just like in Italy.', date: '2025-01-17', helpful: 31 },
      { id: 2, author: 'Rachel B.', rating: 5, comment: 'My kids request this every weekend now!', date: '2025-01-13', helpful: 24 },
      { id: 3, author: 'Marco R.', rating: 5, comment: 'As an Italian, I approve! Ottimo!', date: '2025-01-09', helpful: 19 }
    ],
    comments: [
      { 
        id: 1, 
        author: 'Sam D.', 
        comment: 'What temperature should I bake this at?', 
        date: '2025-01-22', 
        replies: [
          { id: 1, author: 'Pete', comment: 'As hot as your oven goes! 500-550°F is ideal. Use a pizza stone if you have one.', date: '2025-01-22' }
        ]
      }
    ],
    likes: 445
  }
};

export default function ClientPostPage({ id }) {
  const router = useRouter();
  const post = posts[id];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [activeTab, setActiveTab] = useState('pattern'); // pattern, chart, reviews, comments

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/handmade" className="text-purple-600 hover:underline">
            Back to Handmade
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this ${post.title}!`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
    setShowShareMenu(false);
  };

  const averageRating = post.reviews.length > 0 
    ? (post.reviews.reduce((acc, r) => acc + r.rating, 0) / post.reviews.length).toFixed(1)
    : 0;

  // Determine if this is a cooking post
  const isCookingPost = post.id >= 4;
  const patternLabel = isCookingPost ? 'Recipe' : 'Pattern';
  const chartLabel = isCookingPost ? 'Steps' : 'Chart';

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div>
            {/* Main Image Gallery */}
            <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden mb-4">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
                  <div className="text-center">
                    <p className="text-sm mb-2">Image {currentImageIndex + 1} of {post.images.length}</p>
                    <p className="text-xs text-gray-500">Product photo placeholder</p>
                  </div>
                </div>
              </div>
              
              {post.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {post.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {post.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-purple-600 scale-105'
                        : 'border-gray-300 dark:border-slate-600 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900" />
                  </button>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  liked
                    ? 'bg-red-500 text-white'
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-slate-700'
                }`}
              >
                <Heart className={`w-5 h-5 ${liked ? 'fill-white' : ''}`} />
                {liked ? post.likes + 1 : post.likes}
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                  Share
                </button>

                {showShareMenu && (
                  <div className="absolute top-full mt-2 right-0 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-gray-200 dark:border-slate-700 p-2 min-w-[200px] z-10">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-blue-600" />
                      <span>Facebook</span>
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-blue-400" />
                      <span>Twitter</span>
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-5 h-5 text-green-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <LinkIcon className="w-5 h-5" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>

              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                {post.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold">{averageRating}</span>
                <span className="text-gray-500">({post.reviews.length} reviews)</span>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                  <Layers className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Difficulty</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{post.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{post.time}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="font-semibold text-gray-900 dark:text-white">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Materials */}
              <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">
                  {isCookingPost ? 'Ingredients' : 'Materials Needed'}
                </h3>
                <ul className="space-y-2">
                  {post.materials.map((material, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200 dark:border-slate-700 overflow-x-auto">
            {[
              { id: 'pattern', label: patternLabel },
              { id: 'chart', label: chartLabel },
              { id: 'reviews', label: `Reviews (${post.reviews.length})` },
              { id: 'comments', label: `Comments (${post.comments.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600 dark:text-purple-400 border-b-2 border-purple-600 dark:border-purple-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'pattern' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {isCookingPost ? 'Recipe Instructions' : 'Crochet Pattern'}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap font-mono text-sm bg-gray-50 dark:bg-slate-900 p-6 rounded-xl">
                    {post.pattern}
                  </pre>
                </div>
              </div>
            )}

            {activeTab === 'chart' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {isCookingPost ? 'Step-by-Step Guide' : 'Crochet Chart'}
                </h3>
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-12 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{isCookingPost ? 'Step-by-step photos placeholder' : 'Chart diagram placeholder'}</p>
                  <p className="text-sm text-gray-500">{isCookingPost ? 'Visual cooking steps would appear here' : 'Visual stitch diagram would appear here'}</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Customer Reviews
                </h3>
                <div className="space-y-6">
                  {post.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-slate-700 pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">{review.author}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating
                                      ? 'fill-yellow-400 text-yellow-400'
                                      : 'text-gray-300 dark:text-gray-600'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">{review.comment}</p>
                      <button className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Comments
                </h3>
                
                {/* Comment Form */}
                <div className="mb-8 p-6 bg-gray-50 dark:bg-slate-900 rounded-xl">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts or ask a question..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows="4"
                  />
                  <button className="mt-3 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                    Post Comment
                  </button>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="border-b border-gray-200 dark:border-slate-700 pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-2">
                        <p className="font-semibold text-gray-900 dark:text-white">{comment.author}</p>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">{comment.comment}</p>
                      
                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="ml-8 mt-4 space-y-4">
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="bg-gray-50 dark:bg-slate-900 p-4 rounded-lg">
                              <div className="flex items-start justify-between mb-2">
                                <p className="font-semibold text-purple-600 dark:text-purple-400">{reply.author}</p>
                                <span className="text-sm text-gray-500">{reply.date}</span>
                              </div>
                              <p className="text-gray-700 dark:text-gray-300">{reply.comment}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline mt-2">
                        Reply
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}



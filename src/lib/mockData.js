// Mock data for development when CMS is not available
// This matches the structure returned by the CMS API

export const mockCategories = [
  {
    id: 1,
    name: 'Crochet',
    slug: 'crochet',
    icon: 'Scissors',
    description: 'Handmade crochet patterns and projects',
  },
  {
    id: 2,
    name: 'Cooking',
    slug: 'cooking',
    icon: 'ChefHat',
    description: 'Delicious recipes and cooking guides',
  },
];

export const mockPosts = [
  {
    id: 1,
    title: 'Cute Amigurumi Bear',
    slug: 'cute-amigurumi-bear',
    description: 'Adorable handmade crochet bear perfect for gifts or decoration',
    content: `**Round 1:** Magic ring, 6 sc in ring (6)
**Round 2:** Inc in each st around (12)
**Round 3:** *Sc, inc* repeat around (18)
**Round 4:** *2 sc, inc* repeat around (24)
**Round 5-8:** Sc in each st around (24)
**Round 9:** *2 sc, dec* repeat around (18)
**Round 10:** *Sc, dec* repeat around (12)
Stuff firmly
**Round 11:** Dec around (6)
Fasten off and close.`,
    difficulty: 'Beginner',
    time: '4-6 hours',
    category: { id: 1, name: 'Crochet', slug: 'crochet' },
    tags: ['amigurumi', 'bear', 'beginner-friendly', 'toy'],
    images: [],
    chartImage: null,
    materials: [
      { id: 1, name: 'Yarn (brown, white)', quantity: '100g', notes: 'Worsted weight' },
      { id: 2, name: '3.5mm crochet hook', quantity: '1', notes: '' },
      { id: 3, name: 'Safety eyes', quantity: '2', notes: '12mm' },
      { id: 4, name: 'Stuffing', quantity: 'As needed', notes: 'Polyester' },
    ],
    pattern: `**Round 1:** Magic ring, 6 sc in ring (6)...`,
    likes: 234,
    views: 1523,
    reviews: [
      { id: 1, author: 'Sarah M.', rating: 5, comment: 'Love this pattern! So easy to follow.', date: '2025-01-15', helpful: 12 },
      { id: 2, author: 'Mike T.', rating: 4, comment: 'Great for beginners. Turned out perfect!', date: '2025-01-10', helpful: 8 }
    ],
    comments: [
      { 
        id: 1, 
        author: 'Jane D.', 
        comment: 'Can I use a different yarn weight?', 
        date: '2025-01-20', 
        replies: [
          { id: 1, author: 'Pete', comment: 'Yes! Just adjust your hook size accordingly.', date: '2025-01-20' }
        ]
      },
      { id: 2, author: 'Lisa K.', comment: 'This is so cute! Making one now.', date: '2025-01-18', replies: [] }
    ]
  },
  {
    id: 2,
    title: 'Cozy Granny Square Blanket',
    slug: 'cozy-granny-square-blanket',
    description: 'Classic granny square blanket pattern with modern color combinations',
    content: 'Pattern details for granny square blanket...',
    difficulty: 'Intermediate',
    time: '20-30 hours',
    category: { id: 1, name: 'Crochet', slug: 'crochet' },
    tags: ['blanket', 'granny-square', 'intermediate', 'home-decor'],
    images: [],
    chartImage: null,
    materials: [
      { id: 1, name: 'Worsted weight yarn (multiple colors)', quantity: '500g', notes: '' },
      { id: 2, name: '5mm crochet hook', quantity: '1', notes: '' },
      { id: 3, name: 'Yarn needle', quantity: '1', notes: '' },
    ],
    pattern: 'Pattern details for granny square blanket...',
    likes: 189,
    views: 892,
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
    ]
  },
  {
    id: 3,
    title: 'Delicate Lace Doily',
    slug: 'delicate-lace-doily',
    description: 'Elegant vintage-style lace doily for table decoration',
    content: 'Pattern details for lace doily...',
    difficulty: 'Advanced',
    time: '8-12 hours',
    category: { id: 1, name: 'Crochet', slug: 'crochet' },
    tags: ['doily', 'lace', 'advanced', 'vintage', 'home-decor'],
    images: [],
    chartImage: null,
    materials: [
      { id: 1, name: 'Cotton thread size 10', quantity: '1 ball', notes: '' },
      { id: 2, name: '1.5mm steel hook', quantity: '1', notes: '' },
      { id: 3, name: 'Starch (for blocking)', quantity: 'As needed', notes: '' },
    ],
    pattern: 'Pattern details for lace doily...',
    likes: 156,
    views: 654,
    reviews: [
      { id: 1, author: 'Patricia W.', rating: 5, comment: 'Challenging but worth it! Stunning result.', date: '2025-01-08', helpful: 7 }
    ],
    comments: []
  },
  {
    id: 4,
    title: 'Vietnamese Pho Bo',
    slug: 'vietnamese-pho-bo',
    description: 'Authentic Vietnamese beef noodle soup with aromatic broth and fresh herbs',
    content: `**Step 1: Prepare the Bones**
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
Place noodles in bowl, top with raw beef slices, ladle hot broth over. Serve with herbs, lime, and bean sprouts.`,
    difficulty: 'Intermediate',
    time: '3-4 hours',
    category: { id: 2, name: 'Cooking', slug: 'cooking' },
    tags: ['vietnamese', 'soup', 'beef', 'comfort-food', 'traditional'],
    images: [],
    chartImage: null,
    materials: [
      { id: 1, name: 'Beef bones', quantity: '2-3 lbs', notes: '' },
      { id: 2, name: 'Rice noodles (bánh phở)', quantity: '1 lb', notes: '' },
      { id: 3, name: 'Star anise', quantity: '3-4 pieces', notes: '' },
      { id: 4, name: 'Cinnamon stick', quantity: '1', notes: '' },
      { id: 5, name: 'Fresh herbs (Thai basil, cilantro)', quantity: '1 bunch each', notes: '' },
      { id: 6, name: 'Lime wedges', quantity: '4-6', notes: '' },
      { id: 7, name: 'Bean sprouts', quantity: '1 cup', notes: '' },
      { id: 8, name: 'Beef slices (sirloin or eye round)', quantity: '1 lb', notes: 'Thinly sliced' },
    ],
    pattern: `**Step 1: Prepare the Bones**...`,
    likes: 312,
    views: 2145,
    reviews: [
      { id: 1, author: 'David L.', rating: 5, comment: 'Best pho recipe I\'ve tried! The broth is incredible.', date: '2025-01-18', helpful: 23 },
      { id: 2, author: 'Mai N.', rating: 5, comment: 'Tastes just like home! Authentic and delicious.', date: '2025-01-14', helpful: 18 }
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
      { id: 2, author: 'Anna K.', comment: 'Made this yesterday, family loved it!', date: '2025-01-19', replies: [] }
    ]
  },
  {
    id: 5,
    title: 'Japanese Ramen Bowl',
    slug: 'japanese-ramen-bowl',
    description: 'Rich tonkotsu ramen with perfectly cooked noodles and toppings',
    content: 'Recipe details for ramen...',
    difficulty: 'Advanced',
    time: '8-10 hours',
    category: { id: 2, name: 'Cooking', slug: 'cooking' },
    tags: ['japanese', 'ramen', 'noodles', 'pork', 'comfort-food'],
    images: [],
    chartImage: null,
    materials: [
      { id: 1, name: 'Pork bones (trotters and neck)', quantity: '3 lbs', notes: '' },
      { id: 2, name: 'Ramen noodles', quantity: '4 portions', notes: '' },
      { id: 3, name: 'Soy sauce', quantity: '1/4 cup', notes: '' },
      { id: 4, name: 'Mirin', quantity: '2 tbsp', notes: '' },
      { id: 5, name: 'Soft-boiled eggs', quantity: '4', notes: '' },
      { id: 6, name: 'Green onions', quantity: '4', notes: 'Sliced' },
      { id: 7, name: 'Nori seaweed', quantity: '4 sheets', notes: '' },
      { id: 8, name: 'Bamboo shoots', quantity: '1 cup', notes: '' },
    ],
    pattern: 'Recipe details for ramen...',
    likes: 267,
    views: 1876,
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
          { id: 1, author: 'Pete', comment: 'You can use a pressure cooker to reduce time to 3-4 hours.', date: '2025-01-20' }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Classic Margherita Pizza',
    slug: 'classic-margherita-pizza',
    description: 'Homemade Neapolitan-style pizza with fresh mozzarella and basil',
    content: 'Recipe details for pizza...',
    difficulty: 'Beginner',
    time: '2-3 hours (including rise time)',
    category: { id: 2, name: 'Cooking', slug: 'cooking' },
    tags: ['italian', 'pizza', 'vegetarian', 'beginner-friendly', 'classic'],
    images: [],
    chartImage: null,
    materials: [
      { id: 1, name: 'Pizza dough (or 500g bread flour)', quantity: '1 batch', notes: '' },
      { id: 2, name: 'San Marzano tomatoes (crushed)', quantity: '1 can', notes: '' },
      { id: 3, name: 'Fresh mozzarella cheese', quantity: '250g', notes: '' },
      { id: 4, name: 'Fresh basil leaves', quantity: '1 handful', notes: '' },
      { id: 5, name: 'Extra virgin olive oil', quantity: '3 tbsp', notes: '' },
      { id: 6, name: 'Salt', quantity: 'To taste', notes: '' },
    ],
    pattern: 'Recipe details for pizza...',
    likes: 445,
    views: 3201,
    reviews: [
      { id: 1, author: 'Tony M.', rating: 5, comment: 'Simple and perfect! Just like in Italy.', date: '2025-01-17', helpful: 31 },
      { id: 2, author: 'Rachel B.', rating: 5, comment: 'My kids request this every weekend now!', date: '2025-01-13', helpful: 24 }
    ],
    comments: [
      { 
        id: 1, 
        author: 'Sam D.', 
        comment: 'What temperature should I bake this at?', 
        date: '2025-01-22', 
        replies: [
          { id: 1, author: 'Pete', comment: 'As hot as your oven goes! 500-550°F is ideal.', date: '2025-01-22' }
        ]
      }
    ]
  },
];

const candidates = [
  {
    name: 'A.J. Goldsman',
    position: 'President',
    slate: 'Independent',
    totalRaised: 66.95,
    sources: [],
    totalSpent: 65.33,
    allocation: [
    { description: 'Copy Paper', amount: 17.07 },
      { description: 'Printer Ink', amount: 19.59 },
      { description: 'Vinyl Banner', amount: 28.67 },
      ],
  },
  {
    name: 'Aaron Boudaie',
    position: 'President',
    slate: 'Independent',
    totalRaised: 541.6,
    sources: [{ name: 'self', amount: 541.6 }],
    totalSpent: 499.55,
    allocation: [
      { description: 'Website', amount: 20.16 },
      { description: 'Signboard', amount: 132.56 },
      { description: 'Flyers', amount: 146.83 },
      { description: 'T-Shirts', amount: 200 },
    ],
  },
  {
    name: 'Aaron Simental',
    position: 'Transfer Student Representative',
    slate: 'Independent',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 509.99,
    allocation: [
      { description: 'T-Shirts', amount: 67.00 },
      { description: 'T-Shirt Design Printing', amount: 170.00 },
      { description: 'Banner', amount: 114.95 },
      { description: 'Flyers', amount: 138.95 },
      { description: 'Signboard Supplies', amount: 19.09 },
    ],
  },
  {
    name: 'Alexandra Madison',
    position: 'Campus Events Commissioner',
    slate: 'Independent',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Andrew Sokoler',
    position: 'General Representative',
    slate: 'Candidates Operating Clearly',
    totalRaised: 300,
    sources: [{ name: 'self', amount: 300 }],
    totalSpent: 206.4,
    allocation: [
      { description: 'Candidate Clothing', amount: 33 },
      { description: 'T-Shirts', amount: 173.4 },
    ],
  },
  {
    name: 'Aneri Suthar',
    position: 'Facilities Commissioner',
    slate: 'Bruins United',
    totalRaised: 536.21,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 536.21,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Water Bottles', amount: 246.0 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },
    ],
  },
  {
    name: 'Ashraf Beshay',
    position: 'President',
    slate: 'Independent',
    totalRaised: 599.74,
    sources: [],
    totalSpent: 553.26,
    allocation: [
    { description: 'Standard Postcards', amount: 119.83 },
    { description: 'Vinyl', amount: 106.95 },
    { description: 'Campaign Shirts', amount: 309.29 },
    { description: 'Nails and wood', amount: 17.19 },
    ],
  },
  {
    name: 'Ayesha Haleem',
    position: 'General Representative',
    slate: 'Independent',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 139.89,
    allocation: [
      { description: 'T-Shirts', amount: 121.22 },
      { description: 'Website', amount: 18.67 },
      { description: 'Blue Books', amount: 32.00 },
      { description: 'Banner Mounting Materials', amount: 133.75},
      { description: 'Flyers', amount: 146.83 },
      { description: 'Banner', amount: 71.40 },
      { description: 'Facebook Promotion - Video', amount: 15.00 },
      { description: 'BFacebook Promotion - Post', amount: 10.00 },


    ],
  },
  {
    name: 'Bella Martin',
    position: 'General Representative',
    slate: 'Bruins United',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 465.21,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Bottle Openers', amount: 175 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },

    ],
  },
  {
    name: 'Berenise Arriaga-Pacheco',
    position: 'General Representative',
    slate: 'Leaders Influencing Tomorrow',
    totalRaised: 500,
    sources: [],
    totalSpent: 242.83,
    allocation: [
    { description: 'Signboard Banner', amount: 48.00},
    { description: 'Flyers', amount: 38.57, slateExpense: true },
    { description: 'Lighters', amount: 3.43, slateExpense: true },
    { description: 'Website', amount: 4.96, slateExpense: true },
    { description: 'Stickers', amount: 25.25, slateExpense: true },
    { description: 'Shirts', amount: 107.15, slateExpense: true },
    { description: 'Signboard Materials', amount: 15.47 },
    ],
  },
  {
    name: 'Bethanie Atinuke Sonola',
    position: 'Community Service Commissioner',
    slate: 'Independent',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Brock Bauer',
    position: 'Academic Affairs Commissioner',
    slate: 'Bruins United',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 465.21,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Bottle Openers', amount: 175 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },

    ],
  },
  {
    name: 'Claire Fieldman',
    position: 'President',
    slate: 'Bruins United',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 541.21,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Single Use Coffee Cups', amount: 251 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },
      { description: 'Coffee', amount: 30.48 },
    ],
  },
  {
    name: 'Delia Xing',
    position: 'General Representative',
    slate: 'Independent',
    totalRaised: 349.43,
    sources: [{ name: 'self', amount: 349.43 }],
    totalSpent: 349.43,
    allocation: [
      { description: 'T-Shirts', amount: 254.54 },
      { description: 'Stickers', amount: 94.89 },
      { description: 'Flyers', amount: 98.95 },
      { description: 'Poster', amount: 65.87 },
      { description: 'Flyers', amount: 76.65 },
    ],
  },
  {
    name: 'Eduardo Solis',
    position: 'General Representative',
    slate: 'Independent',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [
    { description: 'PVC Pipes', amount: 254.54 },
    { description: 'Flyers', amount: 94.89 },
    { description: 'Mesh Banner', amount: 98.95 },
    { description: 'Steel Pipe', amount: 65.87 },
    ],
  },
  {
    name: 'Furkan Yalcin',
    position: 'President',
    slate: 'Independent',
    totalRaised: 82.11,
    sources: [],
    totalSpent: 74.99,
    allocation: [
    { description: 'Banner', amount: 74.99 },
    ],
  },
  {
    name: 'George Louis Faour',
    position: 'Student Wellness Commissioner',
    slate: 'Independent',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Giovanny Machado',
    position: 'Financial Supports Commissioner',
    slate: 'Leaders Influencing Tomorrow',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [
    { description: 'Signboard Banner', amount: 48.00},
    { description: 'Flyers', amount: 38.57, slateExpense: true },
    { description: 'Lighters', amount: 3.43, slateExpense: true },
    { description: 'Website', amount: 4.96, slateExpense: true },
    { description: 'Stickers', amount: 25.25, slateExpense: true },
    { description: 'Shirts', amount: 107.15, slateExpense: true },
    { description: 'Signboard Materials', amount: 15.47 },
    ],
  },
  {
    name: 'Helen-Sage Lee',
    position: 'General Representative',
    slate: 'Independent',
    totalRaised: 171,
    sources: [{ name: 'self', amount: 171 }],
    totalSpent: 171,
    allocation: [
      { description: 'Flyers', amount: 50 },
      { description: 'Signboard', amount: 55 },
      { description: 'Stickers', amount: 30 },
      { description: 'Website', amount: 36 },
      { description: 'T-Shirts', amount: 280 },
      { description: 'Facebook Advertisements', amount: 30 },
      { description: 'Facebook Advertisements', amount: 20 },
      { description: 'Facebook Advertisements', amount: 30 },
    ],
  },
  {
    name: 'Izzy Gardner',
    position: 'Internal Vice President',
    slate: 'Bruins United',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 536.21,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Credit Card Holders', amount: 246 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },

    ],
  },
  {
    name: 'Jamie Kennerk',
    position: 'External Vice President',
    slate: 'Independent',
    totalRaised: 600,
    sources: [{ name: 'Individual Contributors', amount: 460 }],
    totalSpent: recalc,
    allocation: [
      { description: 'T-Shirts', amount: 302.17 },
      { description: 'Signboard', amount: 78.98 },
      { description: 'Campaign Stickers', amount: 28.6 },
      { description: 'Flyers', amount: 85.00 },
      { description: 'Wood (including lumber fee)', amount: 16.75 },
      { description: 'Sand', amount: 8.40 },
      { description: 'Facebook Page Promotion', amount: 25 },
      { description: 'Facebook Event Promotion', amount: 50 },
    ],
  },
  {
    name: 'Jay Manzano',
    position: 'Financial Supports Commissioner',
    slate: 'Independent',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Jessica Kim',
    position: 'Transfer Student Representative',
    slate: 'Bruins United',
    totalRaised: 600,
    sources: [{ name: 'Parent', amount: 600 }],
    totalSpent: 567.71,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Credit Card Holders', amount: 277.5 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },

    ],
  },
  {
    name: 'John Gordon',
    position: 'President',
    slate: 'Independent',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Julia Ho-Gonzalez',
    position: 'Facilities Commissioner',
    slate: 'Independent',
    totalRaised: 250,
    sources: [{ name: 'Individual Contributors', amount: 250 }],
    totalSpent: 243.45,
    allocation: [
      { description: 'T-Shirts', amount: 198.45 },
      { description: 'Stickers', amount: 45 },
    ],
  },
  {
    name: 'Justin Suarez',
    position: 'Financial Supports Commissioner',
    slate: 'Independent',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Karla Blessing Sāvaliolefilemū Thomas',
    position: 'External Vice President',
    slate: 'Leaders Influencing Tomorrow',
    totalRaised: 500,
    sources: [],
    totalSpent: 242.83,
    allocation: [
    { description: 'Signboard Banner', amount: 48.00},
    { description: 'Flyers', amount: 38.57, slateExpense: true },
    { description: 'Lighters', amount: 3.43, slateExpense: true },
    { description: 'Website', amount: 4.96, slateExpense: true },
    { description: 'Stickers', amount: 25.25, slateExpense: true },
    { description: 'Shirts', amount: 107.15, slateExpense: true },
    { description: 'Signboard Materials', amount: 15.47 },
    ],
  },
  {
    name: 'Kosi Ogbuli',
    position: 'President',
    slate: 'For the People',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Lior Behdadnia',
    position: 'Financial Supports Commissioner',
    slate: 'Bruins United',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 350 }, { name: 'Barpay', amount: 250 }],
    totalSpent: 488.71,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Credit Card Holders', amount: 198.5 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },
      { description: 'Lior Money Flyers', amount: 27.00 },
    ],
  },
  {
    name: 'Naomi Kisel',
    position: 'General Representative',
    slate: 'Bruins United',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 567.71,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Mood Cups', amount: 277.5 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },
    ],
  },
  {
    name: 'Nicole Corona Diaz',
    position: 'External Vice President',
    slate: 'Independent',
    totalRaised: 505.41,
    sources: [{ name: 'self', amount: 175 }],
    totalSpent: 175,
    allocation: [
    { description: 'T-Shirts', amount: 350 },
    { description: 'Flyers', amount: 86.22 },
    { description: 'Signboard Supplies', amount: 61 },
    ],
  },
  {
    name: 'Nidirah Stephens',
    position: 'Academic Affairs Commissioner',
    slate: 'For the People',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Richard White',
    position: 'President',
    slate: 'Leaders Influencing Tomorrow',
    totalRaised: 500,
    sources: [],
    totalSpent: 242.83,
    allocation: [
    { description: 'Signboard Banner', amount: 48.00},
    { description: 'Flyers', amount: 38.57, slateExpense: true },
    { description: 'Lighters', amount: 3.43, slateExpense: true },
    { description: 'Website', amount: 4.96, slateExpense: true },
    { description: 'Stickers', amount: 25.25, slateExpense: true },
    { description: 'Shirts', amount: 107.15, slateExpense: true },
    { description: 'Signboard Materials', amount: 15.47 },
    ],
  },
  {
    name: 'Robert Watson',
    position: 'Internal Vice President',
    slate: 'Independent',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 287.99,
    allocation: [{ description: 'T-Shirts', amount: 287.99 },
    { description: 'Mesh Banner', amount: 139.99 },
    { description: 'Flyers', amount: 112.99 },
    { description: 'Banner Supplies', amount: 4.56 },
    ],
  },
  {
    name: 'Roberto Vasquez',
    position: 'Academic Affairs Commissioner',
    slate: 'Leaders Influencing Tomorrow',
    totalRaised: 500,
    sources: [],
        totalSpent: 242.83,
    allocation: [
    { description: 'Signboard Banner', amount: 48.00},
    { description: 'Flyers', amount: 38.57, slateExpense: true },
    { description: 'Lighters', amount: 3.43, slateExpense: true },
    { description: 'Website', amount: 4.96, slateExpense: true },
    { description: 'Stickers', amount: 25.25, slateExpense: true },
    { description: 'Shirts', amount: 107.15, slateExpense: true },
    { description: 'Signboard Materials', amount: 15.47 },
],
  },
  {
    name: 'Salvador Martinez',
    position: 'Internal Vice President',
    slate: 'Leaders Influencing Tomorrow',
    totalRaised: 500,
    sources: [],
    totalSpent: 242.83,
    allocation: [
    { description: 'Signboard Banner', amount: 48.00},
    { description: 'Flyers', amount: 38.57, slateExpense: true },
    { description: 'Lighters', amount: 3.43, slateExpense: true },
    { description: 'Website', amount: 4.96, slateExpense: true },
    { description: 'Stickers', amount: 25.25, slateExpense: true },
    { description: 'Shirts', amount: 107.15, slateExpense: true },
    { description: 'Signboard Materials', amount: 15.47 },
],
  },
  {
    name: 'Sarena Khasawneh',
    position: 'Cultural Affairs Commissioner',
    slate: 'For the People',
    totalRaised: 0,
    sources: [],
    totalSpent: 0,
    allocation: [],
  },
  {
    name: 'Victoria Solkovits',
    position: 'External Vice President',
    slate: 'Bruins United',
    totalRaised: 600,
    sources: [{ name: 'self', amount: 600 }],
    totalSpent: 488.71,
    allocation: [
      { description: 'T-Shirts', amount: 147.45, slateExpense: true },
      { description: 'Flyers', amount: 37.65, slateExpense: true },
      { description: 'Signboard', amount: 105.11 },
      { description: 'Credit Card Holders', amount: 198.5 },
      { description: 'Website', amount: 2.58, slateExpense: true },
      { description: 'Banner', amount: 2.55, slateExpense: true },
      { description: 'Sandbag Material', amount: 5.85 },

    ],
  },
  {
    name: 'William Hickman',
    position: 'Transfer Student Representative',
    slate: 'Leaders Influencing Tomorrow',
    totalRaised: 500,
    sources: [],
    totalSpent: 242.83,
    allocation: [
    { description: 'Signboard Banner', amount: 48.00},
    { description: 'Flyers', amount: 38.57, slateExpense: true },
    { description: 'Lighters', amount: 3.43, slateExpense: true },
    { description: 'Website', amount: 4.96, slateExpense: true },
    { description: 'Stickers', amount: 25.25, slateExpense: true },
    { description: 'Shirts', amount: 107.15, slateExpense: true },
    { description: 'Signboard Materials', amount: 15.47 },
],
  },
];

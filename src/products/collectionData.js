// data/collectionData.js

export const categoriesData = [
  { name: "TRACKS", active: true, count: 12 },
  { name: "T-SHIRTS", active: false, count: 24 },
  { name: "SHORTS", active: false, count: 8 },
  { name: "GYM SHORTS", active: false, count: 6 },
  { name: "GYM TRACKS", active: false, count: 10 }
];

export const productsData = [
  {
    id: 1,
    name: "Men Solid Sports Jogger",
    price: "₹1,233",
    originalPrice: "₹1,800",
    image: "/images/products/jogger-1.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "gray"],
    category: "TRACKS",
    isNew: true,
    rating: 4.2,
    reviews: 156
  },
  {
    id: 2,
    name: "Men Graphic Print T-shirt",
    price: "₹1,800",
    originalPrice: null,
    image: "/images/products/tshirt-1.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["white", "black"],
    category: "T-SHIRTS",
    isNew: true,
    rating: 4.5,
    reviews: 89
  },
  {
    id: 3,
    name: "Men Solid Sports Jogger",
    price: "₹1,233",
    originalPrice: "₹1,800",
    image: "/images/products/jogger-2.jpg",
    discount: "FRESH FIND",
    sizes: ["M", "L", "XL"],
    colors: ["black", "navy"],
    category: "TRACKS",
    isNew: true,
    rating: 4.3,
    reviews: 201
  },
  {
    id: 4,
    name: "Men Graphic Print T-shirt",
    price: "₹1,800",
    originalPrice: null,
    image: "/images/products/tshirt-2.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "gray"],
    category: "T-SHIRTS",
    isNew: true,
    rating: 4.1,
    reviews: 67
  },
  {
    id: 5,
    name: "Men Performance Track Jogger",
    price: "₹1,450",
    originalPrice: "₹2,100",
    image: "/images/products/jogger-3.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["black", "gray", "navy"],
    category: "TRACKS",
    isNew: true,
    rating: 4.6,
    reviews: 134
  },
  {
    id: 6,
    name: "Men Typography Print T-shirt",
    price: "₹1,650",
    originalPrice: "₹2,200",
    image: "/images/products/tshirt-3.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black", "gray"],
    category: "T-SHIRTS",
    isNew: true,
    rating: 4.4,
    reviews: 98
  },
  {
    id: 7,
    name: "Men Cotton Blend Track Jogger",
    price: "₹1,320",
    originalPrice: "₹1,900",
    image: "/images/products/jogger-4.jpg",
    discount: "FRESH FIND",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["black", "charcoal"],
    category: "TRACKS",
    isNew: true,
    rating: 4.0,
    reviews: 78
  },
  {
    id: 8,
    name: "Men Abstract Print T-shirt",
    price: "₹1,750",
    originalPrice: null,
    image: "/images/products/tshirt-4.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "navy"],
    category: "T-SHIRTS",
    isNew: true,
    rating: 4.3,
    reviews: 112
  },
  {
    id: 9,
    name: "Men Athletic Gym Shorts",
    price: "₹990",
    originalPrice: "₹1,400",
    image: "/images/products/shorts-1.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "gray", "navy"],
    category: "GYM SHORTS",
    isNew: true,
    rating: 4.2,
    reviews: 85
  },
  {
    id: 10,
    name: "Men Premium Track Jogger",
    price: "₹1,899",
    originalPrice: "₹2,500",
    image: "/images/products/jogger-5.jpg",
    discount: "FRESH FIND",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["black", "charcoal", "navy"],
    category: "TRACKS",
    isNew: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 11,
    name: "Men Vintage Print T-shirt",
    price: "₹1,550",
    originalPrice: "₹2,000",
    image: "/images/products/tshirt-5.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL"],
    colors: ["white", "black", "gray"],
    category: "T-SHIRTS",
    isNew: true,
    rating: 4.1,
    reviews: 76
  },
  {
    id: 12,
    name: "Men Quick Dry Gym Shorts",
    price: "₹1,150",
    originalPrice: "₹1,600",
    image: "/images/products/shorts-2.jpg",
    discount: "FRESH FIND",
    sizes: ["S", "M", "L", "XL"],
    colors: ["black", "navy", "gray"],
    category: "GYM SHORTS",
    isNew: true,
    rating: 4.4,
    reviews: 94
  }
];
// Filter Options
export const filterOptions = {
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: [
    { name: "Black", value: "black", hex: "#000000" },
    { name: "White", value: "white", hex: "#FFFFFF" },
    { name: "Gray", value: "gray", hex: "#6B7280" },
    { name: "Navy", value: "navy", hex: "#1E3A8A" },
    { name: "Charcoal", value: "charcoal", hex: "#374151" }
  ],
  priceRanges: [
    { label: "₹0 - ₹1000", value: "0-1000", min: 0, max: 1000 },
    { label: "₹1000 - ₹1500", value: "1000-1500", min: 1000, max: 1500 },
    { label: "₹1500 - ₹2000", value: "1500-2000", min: 1500, max: 2000 },
    { label: "₹2000+", value: "2000+", min: 2000, max: Infinity }
  ]
};

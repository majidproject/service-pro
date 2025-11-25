// src/constants/index.ts

export const NAV_LINKS = [
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/pros', key: 'pros', label: 'Find Professionals' },
  { href: '/how-it-works', key: 'how_it_works', label: 'How it Works' },
  { href: '/blog', key: 'blog', label: 'Blog' },
];

export const CATEGORIES = [
  { name: "Home Cleaning", icon: "🧹", color: "bg-purple-100 text-purple-600" },
  { name: "Plumbing", icon: "🔧", color: "bg-blue-100 text-blue-600" },
  { name: "Electrician", icon: "⚡", color: "bg-yellow-100 text-yellow-600" },
  { name: "Moving", icon: "📦", color: "bg-orange-100 text-orange-600" },
  { name: "Painting", icon: "🎨", color: "bg-pink-100 text-pink-600" },
  { name: "Gardening", icon: "🌱", color: "bg-green-100 text-green-600" },
  { name: "Web Design", icon: "💻", color: "bg-indigo-100 text-indigo-600" },
  { name: "Photography", icon: "📷", color: "bg-red-100 text-red-600" },
];

// همه عکس‌ها و آواتارها به Picsum تغییر کردند
export const FEATURED_SERVICES = [
  {
    id: 1,
    title: "Deep House Cleaning",
    image: "https://picsum.photos/seed/clean1/800/600",
    rating: 4.8,
    reviews: 124,
    price: 80,
    proName: "Sarah Jenkins",
    proAvatar: "https://picsum.photos/seed/sarah/100/100", // <--- اصلاح شد
    category: "Home Cleaning"
  },
  {
    id: 2,
    title: "AC Repair & Service",
    image: "https://picsum.photos/seed/repair2/800/600",
    rating: 4.9,
    reviews: 85,
    price: 120,
    proName: "Mike Wilson",
    proAvatar: "https://picsum.photos/seed/mike/100/100", // <--- اصلاح شد
    category: "Plumbing"
  },
  {
    id: 3,
    title: "Professional Moving",
    image: "https://picsum.photos/seed/move3/800/600",
    rating: 4.7,
    reviews: 203,
    price: 300,
    proName: "EasyMove Team",
    proAvatar: "https://picsum.photos/seed/move/100/100", // <--- اصلاح شد
    category: "Moving"
  },
  {
    id: 4,
    title: "Interior Painting",
    image: "https://picsum.photos/seed/paint4/800/600",
    rating: 4.6,
    reviews: 56,
    price: 200,
    proName: "Color Masters",
    proAvatar: "https://picsum.photos/seed/color/100/100", // <--- اصلاح شد
    category: "Painting"
  },
];
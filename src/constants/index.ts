/**
 * Global Constants & Mock Data
 * -----------------------------
 * This file serves as a centralized store for static configuration data used across the application.
 * Keeping these values here allows for easier updates and maintainability.
 * * NOTE: In a real-world production environment, most of this data (especially services)
 * would be fetched from a backend API/Database.
 */

/**
 * Main Navigation Links
 * Used in the Header (Desktop/Mobile) and potentially in the Footer.
 */
export const NAV_LINKS = [
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/pros', key: 'pros', label: 'Find Professionals' },
  { href: '/how-it-works', key: 'how_it_works', label: 'How it Works' },
  { href: '/blog', key: 'blog', label: 'Blog' },
];

/**
 * Service Categories
 * Defines the available categories for service filtering and search logic.
 * Contains metadata like icons and color themes for UI rendering.
 */
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

/**
 * Featured Services (Mock Data)
 * Represents the initial list of services displayed on the landing page.
 * * TODO: Replace this static array with a dynamic API fetch (e.g., GET /api/services/featured)
 * to retrieve real-time data from the database.
 */
export const FEATURED_SERVICES = [
  {
    id: 1,
    title: "Deep House Cleaning",
    image: "https://picsum.photos/seed/clean1/800/600",
    rating: 4.8,
    reviews: 124,
    price: 80,
    proName: "Sarah Jenkins",
    proAvatar: "https://picsum.photos/seed/sarah/100/100", 
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
    proAvatar: "https://picsum.photos/seed/mike/100/100", 
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
    proAvatar: "https://picsum.photos/seed/move/100/100",
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
    proAvatar: "https://picsum.photos/seed/color/100/100",
    category: "Painting"
  },
];
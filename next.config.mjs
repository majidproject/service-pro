/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // قبلی (اگر هنوز کارت‌های قدیمی داری بذار بمونه)
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // <--- جدید: اضافه شد
      },
    ],
  },
};

export default nextConfig;
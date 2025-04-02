/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          // Optionally restrict to specific paths:
          // pathname: '/your-account-name/**',
        },
        // Add more patterns as needed
      ],
    },
  };
  
  export default nextConfig;
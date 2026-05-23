/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output for cPanel/Phusion Passenger compatibility
  output: 'standalone',
  // Skip type checking during build (types checked locally via IDE)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;


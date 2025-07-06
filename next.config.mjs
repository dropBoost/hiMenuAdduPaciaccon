/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'axvctqpgabterzldygfj.supabase.co',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

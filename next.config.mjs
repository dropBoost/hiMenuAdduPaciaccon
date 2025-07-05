/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    // domains: ['axvctqpgabterzldygfj.supabase.co'],
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

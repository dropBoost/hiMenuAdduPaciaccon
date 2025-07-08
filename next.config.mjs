import nextPwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'axvctqpgabterzldygfj.supabase.co',
        pathname: '/**',
      },
    ],
  },
  // se vuoi usare altri parametri, li metti qui
};

const withPWA = nextPwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

// 👇 Applichiamo PWA a tutta la config
export default withPWA(nextConfig);

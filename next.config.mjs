/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'therootsandblooms.com' }],
  },
};

export default nextConfig;

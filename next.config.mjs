/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/demo',
        destination: 'https://link.skyffel.com/demo',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

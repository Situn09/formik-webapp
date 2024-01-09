
/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/github-pages',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    prependData: `@import "styles/variables.sass"`,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 支持通过环境变量注入 CDN 前缀（例如 jsDelivr），默认空
  assetPrefix: process.env.ASSET_PREFIX || '',
  basePath: ''
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 用户/组织主页仓库（A452163789.github.io）部署到根路径，不需要 basePath/assetPrefix
  assetPrefix: '',
  basePath: ''
}

module.exports = nextConfig

# 资源分享站

使用 Next.js 构建的静态资源分享网站，用于分享应用下载。

## 功能

- 响应式网页设计
- 应用信息展示
- 下载链接
- 下载统计

## 🛠️ 技术栈

- **框架**: Next.js 14
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **语言**: TypeScript
- **部署**: GitHub Pages

## 📦 快速开始

### 1. 克隆项目
\`\`\`bash
git clone https://github.com/A452163789/A452163789.github.io.git
cd A452163789.github.io
\`\`\`

### 2. 安装依赖
\`\`\`bash
npm install
\`\`\`

### 3. 启动开发服务器
\`\`\`bash
npm run dev
\`\`\`

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 4. 构建和导出
\`\`\`bash
npm run build
\`\`\`

## 🚀 部署到 GitHub Pages

本项目已配置自动部署工作流，只需要：

1. **推送代码到 GitHub**
   \`\`\`bash
   git add .
   git commit -m "初始提交"
   git push origin main
   \`\`\`

2. **在 GitHub 仓库中启用 Pages**
   - 进入仓库设置页面
   - 找到 "Pages" 选项
   - 在 "Source" 中选择 "GitHub Actions"
   - 工作流会自动运行并部署网站

3. **访问网站**
   - 部署完成后，网站将在 `https://a452163789.github.io` 上可用

## 📁 项目结构

\`\`\`
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 主页组件
│   ├── sitemap.ts         # 站点地图
│   └── robots.txt         # 爬虫配置
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 部署配置
├── next.config.js         # Next.js 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
\`\`\`

## 🎨 功能介绍

### 资源展示
- 应用图标和详细信息展示
- 版本、大小、类别等基本信息
- 用户评分和下载统计
- 应用特色功能列表

### 下载功能
- 一键下载按钮
- 下载进度提示
- 实时下载统计更新
- 安全下载提醒

### 用户体验
- 现代化渐变背景
- 流畅的动画效果
- 响应式设计
- 优雅的加载状态

## 🔧 自定义配置

### 添加新资源
编辑 \`app/page.tsx\` 中的 \`resourceData\` 对象：

\`\`\`typescript
const resourceData: Resource = {
  id: 'your_app_id',
  name: '应用名称',
  description: '应用描述',
  downloadUrl: 'https://example.com/download/app.apk',
  version: '1.0.0',
  size: '25.6 MB',
  category: '工具类',
  // ... 其他配置
}
\`\`\`

### 修改样式
主要样式文件位于：
- \`app/globals.css\` - 全局样式和自定义类
- \`tailwind.config.js\` - Tailwind CSS 配置

### SEO 优化
在 \`app/layout.tsx\` 中修改元数据：
- 页面标题和描述
- 关键词设置
- Open Graph 配置

## 📈 性能优化

- ✅ 静态站点生成 (SSG)
- ✅ 图片优化
- ✅ 代码分割
- ✅ 压缩和缓存
- ✅ SEO 友好的 URL

## 🛡️ 安全特性

- 外部链接新窗口打开
- 安全的资源下载提示
- 隐私政策声明
- 无恶意代码注入风险

## 📝 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系方式

如有问题或建议，请通过以下方式联系：
- GitHub Issues: [创建 Issue](https://github.com/A452163789/A452163789.github.io/issues)

---

⭐ 如果这个项目对您有帮助，请给它一个星标！

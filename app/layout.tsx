import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '绿茶VPN - 永远都能连上的VPN',
  description: '永久免费无广告，高速稳定，全球节点覆盖，1秒连接，保护隐私无痕浏览。',
  keywords: '绿茶VPN, 免费VPN, 永久免费, 无广告, 全球节点, 高速稳定, 无痕浏览',
  authors: [{ name: 'LVCHA VPN' }],
  metadataBase: new URL('https://a452163789.github.io'),
  openGraph: {
    title: '绿茶VPN - 永远都能连上的VPN',
    description: '永久免费无广告，高速稳定，全球节点覆盖，1秒连接，保护隐私无痕浏览。',
    type: 'website',
    locale: 'zh_CN',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#E02E24',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-yellow-400 low-res">
        <div className="relative">
          {children}
        </div>
        <div className="noise-overlay" />
      </body>
    </html>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { Download, Shield, Star, Clock, Users, FileText, ChevronDown } from 'lucide-react'

interface Resource {
  id: string
  name: string
  description: string
  downloadUrl: string
  version: string
  size: string
  category: string
  rating: number
  downloads: number
  lastUpdated: string
  icon: string
  screenshots: string[]
  features: string[]
}

const resourceData: Resource = {
  id: 'lvcha_app',
  name: '绿茶VPN',
  description: '永远都能连上的VPN - 永久免费',
  downloadUrl: 'https://www.lvchaapp.cc/download/lvcha_101001.apk',
  version: '1.0.1.001',
  size: '25.6 MB',
  category: 'VPN工具',
  rating: 4.8,
  downloads: 15200,
  lastUpdated: '2024-01-15',
  icon: '🍃',
  screenshots: [],
  features: [
    '永久免费无广告',
    '高速稳定不卡顿',
    '全球节点覆盖',
    '无痕浏览保护隐私'
  ]
}

export default function HomePage() {
  const [downloadCount, setDownloadCount] = useState(resourceData.downloads)
  const [isDownloading, setIsDownloading] = useState(false)
  const [leftSeconds, setLeftSeconds] = useState(20 * 60)
  const [watchers, setWatchers] = useState(3287)
  const [progress, setProgress] = useState(76)
  const [toast, setToast] = useState('')
  const names = ['张三','李四','王五','赵六','刘七','小明','阿华','陈超','王敏']

  useEffect(() => {
    const t = setInterval(() => setLeftSeconds((s) => (s > 0 ? s - 1 : 59 * 60 + 59)), 1000)
    const w = setInterval(() => setWatchers((v) => v + (Math.floor(Math.random() * 3) + 1)), 2500)
    const p = setInterval(() => setProgress((v) => {
      const delta = Math.random() * 2
      const next = Math.min(98, Math.max(60, v + (Math.random() > 0.5 ? delta : -delta)))
      return Math.round(next)
    }), 1500)
    const to = setInterval(() => {
      const n = names[Math.floor(Math.random() * names.length)]
      setToast(`${n} 刚刚0元拼成团`)
    }, 7000)
    return () => { clearInterval(t); clearInterval(w); clearInterval(p); clearInterval(to) }
  }, [])

  const handleDownload = async () => {
    setIsDownloading(true)
    
    // 模拟下载延迟
    setTimeout(() => {
      setDownloadCount(prev => prev + 1)
      setIsDownloading(false)
      
      // 在新窗口中打开下载链接
      window.open(resourceData.downloadUrl, '_blank')
    }, 1000)
  }

  const formatNumber = (num: number) => {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + '万'
    }
    return num.toLocaleString()
  }

  const fmtTime = (s: number) => {
    const m = Math.floor(s / 60)
    const ss = s % 60
    return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen container-mob">
      {/* 导航栏（拼多多风） */}
      <div className="pdd-red p-2 stripe-red" style={{boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'}}>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-yellow-300 pixelated flex items-center justify-center" style={{border: '2px solid #8B0000'}}>
            <span className="text-red-900 text-xs">🍃</span>
          </div>
          <div className="flex-1">
            <div className="search-box low-res">
              <span className="text-red-800 text-xs">🔍 绿茶VPN 永久免费 无广告</span>
            </div>
          </div>
          <span className="pdd-chip blink">限时</span>
          <span className="text-yellow-300 text-xs blurry-text">{formatNumber(watchers)}人在看</span>
        </div>
      </div>

      {/* 主要内容 */}
      <main className="px-2 py-4 safe-bottom">
        {/* 横幅滚动介绍 */}
        <div className="bg-yellow-300 p-2 mb-2 marquee pixelated" style={{border: '3px solid #8B0000', boxShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
          <div className="marquee-content">
            <span className="text-red-800 text-lg blurry-text" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)', fontWeight: '900'}}>
              ★★★绿茶VPN永远都能连上的VPN★★★永久免费无广告★★★高速稳定不卡顿★★★全自研节点遍布全球★★★无惧封锁突破限制★★★1秒连接极速体验★★★无痕浏览保护隐私★★★游戏加速专线连接★★★内置浏览器广告拦截★★★100%隐身数据加密★★★ChatGPT一键导航★★★
            </span>
          </div>
        </div>
        <div className="text-center mb-3">
          <span className="coupon blink">倒计时 {fmtTime(leftSeconds)}</span>
        </div>

        {/* 锯齿分割线 */}
        <div className="zigzag mb-3"></div>

        {/* 标签栏 */}
        <div className="tabs-line mb-2">
          <span className="tab-chip">热销</span>
          <span className="tab-chip">0元购</span>
          <span className="tab-chip">新人礼</span>
          <span className="tab-chip">高速</span>
        </div>

        {/* 下载区域（拼团卡片） */}
        <div className="relative bg-red-700 p-4 text-center pixelated" style={{border: '4px solid #8B0000', boxShadow: 'inset 0 0 15px rgba(0,0,0,0.8)'}}>
          <div className="ribbon">爆款热卖</div>
          <h2 className="text-xl text-yellow-300 mb-2 blurry-text" style={{textShadow: '3px 3px 0px #8B0000', filter: 'contrast(1.3)'}}>
            {resourceData.name}
          </h2>
          <div className="mb-2">
            <span className="pdd-chip">包邮</span>
            <span className="pdd-chip">秒连</span>
            <span className="pdd-chip">新人礼</span>
          </div>
          <div className="mb-3">
            <span className="price-badge">￥0</span>
            <span className="strike">￥29</span>
          </div>
          <div className="progress mb-2">
            <div className="fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-yellow-300 text-xs mb-2 blurry-text">已拼 {progress}% · 仅差2人成团</p>
          <p className="text-yellow-200 mb-3 blurry-text" style={{textShadow: '1px 1px 2px #000'}}>大小：{resourceData.size}</p>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="btn-pdd text-lg shake"
          >
            <Download className={`w-4 h-4 mr-2 inline ${isDownloading ? 'animate-spin' : ''}`} />
            {isDownloading ? '去拼单中…' : '去拼单 0元购'}
          </button>
          <div className="mt-3">
            <span className="sticker">火热拼单中 · 立即参团</span>
          </div>
          <div className="flex items-center justify-center gap-1 mt-2">
            {["张","李","王","赵","刘"].map((n, i) => (
              <div key={i} className="rounded-full w-6 h-6 flex items-center justify-center text-xs"
                   style={{backgroundColor: ['#FFD100','#FFB6C1','#98FB98','#87CEFA','#FFA07A'][i], border: '2px solid #8B0000'}}>
                {n}
              </div>
            ))}
          </div>
          <p className="text-yellow-300 text-xs mt-1 blurry-text">已有 {formatNumber(downloadCount)} 人拼过 · 还差2人成团</p>
        </div>
      </main>

      {/* 浮动提示/Toast */}
      {toast && (
        <div className="toast">{toast}</div>
      )}

      {/* 底部吸附CTA */}
      <div className="sticky-cta">
        <div className="wrap flex items-center justify-between">
          <div>
            <span className="coupon">倒计时 {fmtTime(leftSeconds)}</span>
          </div>
          <button onClick={handleDownload} disabled={isDownloading} className="btn-pdd shake">
            {isDownloading ? '拼单中…' : '立即0元拼'}
          </button>
        </div>
      </div>

      <footer className="bg-yellow-300 mt-4 pixelated" style={{border: '2px solid #8B0000'}}>
        <div className="p-2 text-center">
          <div className="mb-1">
            <div className="w-4 h-4 bg-red-700 inline-block mr-1" style={{border: '1px solid #000'}}>
              <span className="text-yellow-300 text-xs">🍃</span>
            </div>
            <span className="text-red-800 text-base blurry-text" style={{textShadow: '1px 1px 1px rgba(0,0,0,0.5)'}}>绿茶VPN</span>
          </div>
          <p className="text-red-700 text-sm blurry-text">永远都能连上的VPN</p>
          <p className="text-red-800 text-xs mt-1">© 2024</p>
        </div>
      </footer>
    </div>
  )
}

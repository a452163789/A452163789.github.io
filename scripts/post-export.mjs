import fs from 'fs'
import path from 'path'

const root = process.cwd()
const outDir = path.join(root, 'out')

function ensure404Html() {
  const src = path.join(outDir, '404', 'index.html')
  const dest = path.join(outDir, '404.html')
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest)
    console.log('[post-export] 404.html created from 404/index.html')
  } else {
    console.log('[post-export] skip: out/404/index.html not found')
  }
}

function main() {
  if (!fs.existsSync(outDir)) {
    console.error('[post-export] out/ directory not found. Did next build run?')
    process.exit(0)
  }
  ensure404Html()
}

main()

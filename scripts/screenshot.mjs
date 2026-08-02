// Dev-only visual check: renders the login page at a few viewports.
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const BASE_URL = process.env.SHOT_URL ?? 'http://localhost:4173'
const OUT_DIR = process.env.SHOT_DIR ?? '/tmp/shots'

const VIEWPORTS = [
  { name: 'design-1024x682', width: 1024, height: 682 },
  { name: 'desktop-1440x900', width: 1440, height: 900 },
  { name: 'mobile-390x844', width: 390, height: 844 },
]

await mkdir(OUT_DIR, { recursive: true })

const browser = await chromium.launch()
for (const { name, width, height } of VIEWPORTS) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 2 })
  const errors = []
  page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()))
  page.on('pageerror', (err) => errors.push(String(err)))

  await page.goto(BASE_URL, { waitUntil: 'networkidle' })
  await page.evaluate(() => document.fonts.ready)
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${OUT_DIR}/${name}.png`, fullPage: name.startsWith('mobile') })

  console.log(`${name}: captured${errors.length ? ` with errors -> ${errors.join(' | ')}` : ''}`)
  await page.close()
}
await browser.close()

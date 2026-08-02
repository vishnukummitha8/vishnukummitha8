// Dev-only behaviour check for the login form states.
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const BASE_URL = process.env.SHOT_URL ?? 'http://localhost:4173'
const OUT_DIR = process.env.SHOT_DIR ?? '/tmp/shots'
await mkdir(OUT_DIR, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1024, height: 682 }, deviceScaleFactor: 2 })
const errors = []
page.on('console', (msg) => msg.type() === 'error' && errors.push(msg.text()))
page.on('pageerror', (err) => errors.push(String(err)))

await page.goto(BASE_URL, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)

const card = page.locator('form')

// Empty submit -> validation message
await page.getByRole('button', { name: 'Login' }).click()
console.log('empty submit error:', await page.getByRole('alert').textContent())
await card.screenshot({ path: `${OUT_DIR}/state-error.png` })

// Fill credentials, reveal password, pick a plant, remember me
await page.getByPlaceholder('Username').fill('v.kummitha')
await page.getByPlaceholder('Password').fill('Shopfloor@2026')
await page.getByRole('button', { name: 'Show password' }).click()
await page.getByLabel('Select Plant').selectOption('CHN-VA1')
await page.getByLabel('Remember me').check()
await page.waitForTimeout(400) // let colour transitions settle before capturing
await card.screenshot({ path: `${OUT_DIR}/state-filled.png` })

// Submit -> loading state
await page.getByRole('button', { name: 'Login' }).click()
await page.waitForTimeout(150)
await card.screenshot({ path: `${OUT_DIR}/state-submitting.png` })
console.log('remembered user:', await page.evaluate(() => localStorage.getItem('jsw-mes.remembered-user')))

// Reload -> username restored from storage
await page.reload({ waitUntil: 'networkidle' })
console.log('restored username:', await page.getByPlaceholder('Username').inputValue())
console.log('remember checked:', await page.getByLabel('Remember me').isChecked())

console.log(errors.length ? `CONSOLE ERRORS: ${errors.join(' | ')}` : 'no console errors')
await browser.close()

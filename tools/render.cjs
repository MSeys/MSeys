// Renders the picture of the profile README from tools/cards/poster.html into assets/profile.webp (with its rounded
// corners see-through, for GitHub's light and dark theme alike), at twice its size, so it stays sharp.
//   npm install && node tools/render.cjs
// The trace screenshot in it is tools/cards/src/trace.png; take a new one of trace.prototest.dev when the viewer
// changes. CHROME points to a browser of your own; without it, Playwright's.
const { chromium } = require('playwright-core');
const sharp = require('sharp');
const path = require('path');

const page = 'file://' + path.join(__dirname, 'cards', 'poster.html').split(path.sep).join('/');

(async () => {
  const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
  const tab = await browser.newPage({ viewport: { width: 1000, height: 1400 }, deviceScaleFactor: 2 });
  await tab.goto(page, { waitUntil: 'networkidle' });
  await tab.evaluate(() => document.fonts.ready);
  const shot = await (await tab.$('.card')).screenshot({ omitBackground: true });
  await sharp(shot).webp({ quality: 86, alphaQuality: 100 }).toFile(path.join(__dirname, '..', 'assets', 'profile.webp'));
  console.log('rendered profile');
  await browser.close();
})();

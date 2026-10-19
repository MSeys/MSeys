// Renders the pictures of the profile README from tools/cards/cards.html into assets/: one WebP per card (with its
// rounded corners see-through, for GitHub's light and dark theme alike), at twice its size, so it stays sharp.
//   npm install && node tools/render.cjs [header|now|path|photos|profile]   (profile: the README's one picture, from poster.html)
// The trace screenshot in the Now card is tools/cards/src/trace.png; take a new one of trace.prototest.dev when the
// viewer changes. CHROME points to a browser of your own; without it, Playwright's.
const { chromium } = require('playwright-core');
const sharp = require('sharp');
const path = require('path');

const CARDS = ['header', 'now', 'path', 'photos'];
const only = process.argv[2];
const page = 'file://' + path.join(__dirname, 'cards', 'cards.html').split(path.sep).join('/');

(async () => {
  const browser = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {});
  const tab = await browser.newPage({ viewport: { width: 1000, height: 1400 }, deviceScaleFactor: 2 });
  for (const card of CARDS) {
    if (only && card !== only) continue;
    await tab.goto(`${page}?card=${card}`, { waitUntil: 'networkidle' });
    await tab.evaluate(() => document.fonts.ready);
    const shot = await (await tab.$('.card')).screenshot({ omitBackground: true });
    await sharp(shot).webp({ quality: 86, alphaQuality: 100 }).toFile(path.join(__dirname, '..', 'assets', `${card}.webp`));
    console.log('rendered', card);
  }
  // The README's one picture: tools/cards/poster.html, the four parts on one surface.
  if (!only || only === 'profile') {
    await tab.goto('file://' + path.join(__dirname, 'cards', 'poster.html').split(path.sep).join('/'), { waitUntil: 'networkidle' });
    await tab.evaluate(() => document.fonts.ready);
    const shot = await (await tab.$('.card')).screenshot({ omitBackground: true });
    await sharp(shot).webp({ quality: 86, alphaQuality: 100 }).toFile(path.join(__dirname, '..', 'assets', 'profile.webp'));
    console.log('rendered profile');
  }
  await browser.close();
})();

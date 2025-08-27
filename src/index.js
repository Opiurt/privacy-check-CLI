import fs from "fs";
import path from "path";
import { chromium } from "playwright";
import open from 'open';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processUrl(browser, url) {
  const page = await browser.newPage();

  const requests = [];
  const responses = [];

  page.on('request', req => requests.push({ url: req.url(), method: req.method() }));
  page.on('response', res => responses.push({ url: res.url(), status: res.status(), headers: res.headers() }));

  const baseFolder = path.join(__dirname, 'results', new URL(url).hostname);
  if (fs.existsSync(baseFolder)) fs.rmSync(baseFolder, { recursive: true, force: true });
  fs.mkdirSync(baseFolder, { recursive: true });

  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const cookies = await page.context().cookies();

  fs.writeFileSync(path.join(baseFolder, 'requests.json'), JSON.stringify(requests, null, 2));
  fs.writeFileSync(path.join(baseFolder, 'responses.json'), JSON.stringify(responses, null, 2));
  fs.writeFileSync(path.join(baseFolder, 'cookies.json'), JSON.stringify(cookies, null, 2));

  console.log(`✅ Report generato in ${baseFolder}`);
  await open(baseFolder);
  await page.close();
}

export async function main(urls) {
  if (!urls || urls.length === 0) {
    console.error("❌ Inserisci almeno un URL: privacy-check <url1> <url2> ...");
    process.exit(1);
  }

  const browser = await chromium.launch({ headless: true });
  try {
    for (const url of urls) {
      console.log(`🔍 Analisi: ${url}`);
      await processUrl(browser, url);
    }
  } catch (err) {
    console.error("Errore durante l'analisi:", err);
  } finally {
    await browser.close();
  }
}

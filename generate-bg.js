// generate-bg.js — generates a subtle hero background via OpenAI DALL-E 3
// Usage: node generate-bg.js

const fs = require('fs');
const path = require('path');

// ── Read API key from .env ───────────────────────────────────
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.error('Error: .env file not found.');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const match = envContent.match(/OPENAI_API_KEY=(.+)/);
const apiKey = match?.[1]?.trim();

if (!apiKey) {
  console.error('Error: OPENAI_API_KEY not found in .env');
  process.exit(1);
}

// ── Prompt ───────────────────────────────────────────────────
const PROMPT = `
Elegant background texture for a professional financial advisory website.
Wide landscape format. Light grey and soft blue-grey color palette on white.
Visible but subtle abstract geometry — soft architectural lines, gentle diagonal mesh,
light watercolor-wash gradient. Contrast should be clearly visible: light grey (#d0d5e0)
shapes on white (#ffffff), not invisible. No people, no text, no logos, no charts.
Clean, trustworthy, minimal. Suitable for overlaying dark text on top.
`.trim();

const OUTPUT_PATH = path.join(__dirname, 'assets', 'background.png');

// ── Generate ─────────────────────────────────────────────────
async function generate() {
  console.log('Generating background image...');

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt: PROMPT,
      n: 1,
      size: '1536x1024',
      quality: 'medium',
    }),
  });

  const data = await res.json();

  if (data.error) {
    console.error('API error:', data.error.message);
    process.exit(1);
  }

  const item = data.data[0];
  console.log('Image generated. Saving...');

  if (item.b64_json) {
    // gpt-image-1 returns base64
    fs.writeFileSync(OUTPUT_PATH, Buffer.from(item.b64_json, 'base64'));
  } else if (item.url) {
    // dall-e models return a URL
    const imageRes = await fetch(item.url);
    if (!imageRes.ok) {
      console.error('Failed to download image:', imageRes.statusText);
      process.exit(1);
    }
    const buffer = await imageRes.arrayBuffer();
    fs.writeFileSync(OUTPUT_PATH, Buffer.from(buffer));
  } else {
    console.error('No image data in response:', JSON.stringify(item));
    process.exit(1);
  }
  console.log(`Saved to assets/background.png`);
}

generate().catch((err) => {
  console.error('Unexpected error:', err.message);
  process.exit(1);
});

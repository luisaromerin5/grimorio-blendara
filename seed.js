const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const ELEMENTS_FILE = path.join(DATA_DIR, 'elements.json');
const SEED_FILE = path.join(DATA_DIR, 'elements-seed.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// Always seed from the pre-translated file
if (fs.existsSync(SEED_FILE)) {
  fs.copyFileSync(SEED_FILE, ELEMENTS_FILE);
  const data = JSON.parse(fs.readFileSync(ELEMENTS_FILE, 'utf8'));
  console.log(`✦ Seeded ${data.length} elements (with English translations) into the grimoire.`);
} else {
  console.log('ERROR: elements-seed.json not found!');
  process.exit(1);
}

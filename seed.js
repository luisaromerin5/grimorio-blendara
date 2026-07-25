const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, 'data');
const ELEMENTS_FILE = path.join(DATA_DIR, 'elements.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// Look for seed file in multiple locations (volume may hide data/ contents)
const seedLocations = [
  path.join(__dirname, 'elements-seed.json'),
  path.join(__dirname, 'data', 'elements-seed.json'),
];

let seedFile = null;
for (const loc of seedLocations) {
  if (fs.existsSync(loc)) { seedFile = loc; break; }
}

if (seedFile) {
  fs.copyFileSync(seedFile, ELEMENTS_FILE);
  const data = JSON.parse(fs.readFileSync(ELEMENTS_FILE, 'utf8'));
  console.log(`✦ Seeded ${data.length} elements (with English translations) from ${seedFile}`);
} else {
  console.log('ERROR: No seed file found!');
  process.exit(1);
}

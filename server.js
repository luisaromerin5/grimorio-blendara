const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// JSON file storage
const DATA_DIR = path.join(__dirname, 'data');
const ELEMENTS_FILE = path.join(DATA_DIR, 'elements.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

// Ensure elements file exists
if (!fs.existsSync(ELEMENTS_FILE)) {
  fs.writeFileSync(ELEMENTS_FILE, '[]');
}

// Ensure users file exists
if (!fs.existsSync(USERS_FILE)) {
  const hash = bcrypt.hashSync('blendara2024', 10);
  fs.writeFileSync(USERS_FILE, JSON.stringify([{ id: 1, username: 'admin', password: hash }]));
  console.log('Default admin created (user: admin, pass: blendara2024)');
}

// Auto-seed if elements file is empty
let currentElements = [];
try { currentElements = JSON.parse(fs.readFileSync(ELEMENTS_FILE, 'utf8')); } catch(e) {}
if (!currentElements || currentElements.length === 0) {
  console.log('No elements found, seeding from translated data...');
  const seedFile = path.join(__dirname, 'data', 'elements-seed.json');
  if (fs.existsSync(seedFile)) {
    fs.copyFileSync(seedFile, ELEMENTS_FILE);
    console.log('✦ Seeded from elements-seed.json');
  } else {
    require('./seed');
  }
} else {
  console.log(`✦ Loaded ${currentElements.length} elements from database.`);
}

function readElements() { return JSON.parse(fs.readFileSync(ELEMENTS_FILE, 'utf8')); }
function writeElements(data) { fs.writeFileSync(ELEMENTS_FILE, JSON.stringify(data, null, 2)); }
function readUsers() { return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8')); }
function writeUsers(data) { fs.writeFileSync(USERS_FILE, JSON.stringify(data, null, 2)); }

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'blendara-grimoire-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }
}));

function requireAuth(req, res, next) {
  if (req.session && req.session.userId) return next();
  res.redirect('/admin/login');
}

// PUBLIC ROUTES
app.get('/', (req, res) => {
  const elements = readElements().sort((a, b) => a.name_es.localeCompare(b.name_es));
  res.render('index', { elements });
});

app.get('/element/:id', (req, res) => {
  const elements = readElements().sort((a, b) => a.name_es.localeCompare(b.name_es));
  const idx = elements.findIndex(e => e.id == req.params.id);
  if (idx === -1) return res.status(404).render('404');
  const element = elements[idx];
  const prev = idx > 0 ? elements[idx - 1] : elements[elements.length - 1];
  const next = idx < elements.length - 1 ? elements[idx + 1] : elements[0];
  res.render('element', { element, prev, next });
});

// ADMIN ROUTES
app.get('/admin/login', (req, res) => {
  res.render('admin/login', { error: null });
});

app.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.userId = user.id;
    req.session.username = user.username;
    return res.redirect('/admin');
  }
  res.render('admin/login', { error: 'Usuario o contraseña incorrectos' });
});

app.get('/admin/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.get('/admin', requireAuth, (req, res) => {
  const elements = readElements().sort((a, b) => (b.updated_at || '').localeCompare(a.updated_at || ''));
  res.render('admin/dashboard', { elements, username: req.session.username });
});

app.get('/admin/new', requireAuth, (req, res) => {
  res.render('admin/form', { element: null, username: req.session.username });
});

app.get('/admin/edit/:id', requireAuth, (req, res) => {
  const elements = readElements();
  const element = elements.find(e => e.id == req.params.id);
  if (!element) return res.redirect('/admin');
  res.render('admin/form', { element, username: req.session.username });
});

app.post('/admin/save', requireAuth, (req, res) => {
  const elements = readElements();
  const { id, name_es, name_en, scientific_name, category, element, planet, chakra, body_benefits, body_benefits_en, spiritual_benefits, spiritual_benefits_en, uses, uses_en, precautions, precautions_en, image_url } = req.body;
  const now = new Date().toISOString();

  if (id) {
    const idx = elements.findIndex(e => e.id == id);
    if (idx !== -1) {
      elements[idx] = { ...elements[idx], name_es, name_en, scientific_name, category, element, planet, chakra, body_benefits, body_benefits_en, spiritual_benefits, spiritual_benefits_en, uses, uses_en, precautions, precautions_en, image_url, updated_at: now };
    }
  } else {
    const newId = elements.length > 0 ? Math.max(...elements.map(e => e.id)) + 1 : 1;
    elements.push({ id: newId, name_es, name_en, scientific_name, category, element, planet, chakra, body_benefits, body_benefits_en, spiritual_benefits, spiritual_benefits_en, uses, uses_en, precautions, precautions_en, image_url, created_at: now, updated_at: now });
  }
  writeElements(elements);
  res.redirect('/admin');
});

app.post('/admin/delete/:id', requireAuth, (req, res) => {
  let elements = readElements();
  elements = elements.filter(e => e.id != req.params.id);
  writeElements(elements);
  res.redirect('/admin');
});

app.post('/admin/change-password', requireAuth, (req, res) => {
  const { current_password, new_password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.id === req.session.userId);
  if (user && bcrypt.compareSync(current_password, user.password)) {
    user.password = bcrypt.hashSync(new_password, 10);
    writeUsers(users);
    res.redirect('/admin?msg=password_changed');
  } else {
    res.redirect('/admin?msg=wrong_password');
  }
});

app.listen(PORT, () => {
  console.log(`✦ Grimorio Blendara running on http://localhost:${PORT}`);
});

# ✦ Wonderful Elements — Blendara Apothecary

Grimorio herbolario digital con panel de administración.

## 🚀 Deployment (cómo ponerlo online)

### Opción 1: Railway.app (RECOMENDADO - gratis)
1. Sube este proyecto a un repositorio en GitHub
2. Ve a [railway.app](https://railway.app) y crea cuenta con GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Selecciona tu repo
5. Railway detecta Node.js automáticamente
6. ¡Listo! Te da un URL público

### Opción 2: Render.com (gratis)
1. Sube a GitHub
2. Ve a [render.com](https://render.com) → New Web Service
3. Conecta tu repo
4. Build command: `npm install && node seed.js`
5. Start command: `node server.js`
6. ¡Deploy!

### Opción 3: Vercel (gratis)
Requiere adaptación a serverless. No recomendado para este proyecto con SQLite.

## 🔑 Admin Login
- URL: `tu-sitio.com/admin`
- Usuario: `admin`
- Contraseña: `blendara2024`
- **¡Cambia la contraseña después del primer login!**

## 💻 Desarrollo local
```bash
npm install
node seed.js    # Poblar base de datos con los 26 elementos
node server.js  # Servidor en http://localhost:8080
```

## 📁 Estructura
```
grimorio/
├── server.js          # Servidor Express
├── seed.js            # Script para poblar datos iniciales
├── package.json
├── data/              # Base de datos SQLite (se crea automática)
├── public/
│   └── css/
│       ├── style.css  # Estilos públicos
│       └── admin.css  # Estilos del admin
└── views/
    ├── index.ejs      # Página principal (grid de elementos)
    ├── element.ejs    # Detalle de cada elemento
    ├── 404.ejs
    └── admin/
        ├── login.ejs
        ├── dashboard.ejs
        └── form.ejs   # Formulario agregar/editar
```

## ✨ Features
- Grid visual de todos los elementos con filtros por categoría
- Página detalle para cada planta/mineral
- Panel admin protegido con login
- CRUD completo: agregar, editar, eliminar elementos
- Base de datos SQLite (sin necesidad de servicios externos)
- Diseño responsive (se ve bien en celular)
- Precargado con 26 elementos de Blendara

# 🌟 The Little Hall of Stars · Class 8B Digital Appreciation

> **"The world has 29 little stars. Find yours."**
> A personalized, responsive digital appreciation keepsake created with love by their teacher (**Shadha Mam**) for the 29 students of **Class 8B**.

---

## 📖 About The Experience

"The Little Hall of Stars" is a combination of:
- 📖 A personalized digital yearbook
- 📰 A mini online magazine
- 💌 A collection of handwritten appreciation letters
- 🃏 Collectible fantasy character profile trading cards
- ⏳ A digital memory book & time capsule

This is not a conventional marks portal or dashboard. Every interaction is designed to feel warm, personal, memorable, and visually delightful on phones, tablets, and desktops.

---

## 🚀 Key Features

### 1. Private Student Authentication
- Access via each student's Roll Number / PIN (823–851).
- Direct URL protection prevents switching between profiles without authentication.
- Interactive touch keypad and Class 8B Directory helper.

### 2. Eight Personalized Chapters for Every Student
1. **01. A Little World of You**: Student introduction, collectible scrapbook identity card, and personal motto.
2. **02. What Makes You Special**: A heartfelt teacher appreciation letter grounded in positive classroom observations.
3. **03. Your Superpowers**: Interactive cards showcasing positive habits (Curious Mind, Active Listener, Logical Thinker, etc.).
4. **04. A Letter to Your Future Self**: Stationery letter with time-capsule themes, zoom controls, and print view.
5. **05. You're The Cover Star!**: High-fashion mini-magazine cover (*The 8B Chronicle*) with downloadable PNG feature.
6. **06. If You Were a Character...**: Holographic collectible trading card with 3D tilt sheen and 5 core attribute stats.
7. **07. Open When You Doubt Yourself**: Interactive 3D wax-sealed envelope that flips open with sound and confetti.
8. **08. One Last Thing...**: Final teacher farewell message and downloadable **Official Star Certificate (PNG)**.

### 3. Teacher's Desk & Administration (`/admin`)
- PIN-protected teacher portal (Default PIN: `8888` or `teacher8b`).
- Searchable directory of all 29 students.
- Full content editor for all 8 sections with real-time preview and `localStorage` persistence.
- Export all student data to JSON & Import JSON backup.
- **Printable A4 QR Code Sheets**:
  - Automatically generates scannable QR codes for all 29 students.
  - Formatted for crisp A4 paper printing (clean 3x3 grid with names, roll numbers, and branding).
  - Individual QR code PNG downloads.

---

## 📋 Student PIN Roster (Class 8B)

| Roll No | PIN | Student Name | Character Archetype |
|:---:|:---:|:---|:---|
| 1 | **823** | Aarya | The Starlight Navigator |
| 2 | **824** | Amanda Pauline raj | The Horizon Weaver |
| 3 | **825** | Annlin delshia | The Aurora Guardian |
| 4 | **826** | Ashlin danshia | The Luminary Spark |
| 5 | **827** | Aswin raj | The Cyber Sentinel |
| 6 | **828** | Deivamithra | The Celestia Sage |
| 7 | **829** | Dharshan | The Cosmos Voyager |
| 8 | **830** | Fharoy gabriel | The Quantum Questor |
| 9 | **831** | Gautham Karthick | The Chronos Scholar |
| 10 | **832** | Kairav | The Stellar Spark |
| 11 | **833** | Keshna | The Quill of Serenity |
| 12 | **834** | Mahalingam | The North Star Captain |
| 13 | **835** | Mahitha | The Solar Luminary |
| 14 | **836** | Mukul | The Nova Architect |
| 15 | **837** | Nehashmitra | The Starlight Emissary |
| 16 | **838** | Niralya | The Dream Weaver |
| 17 | **839** | Nivyanth | The Cosmos Ranger |
| 18 | **840** | Rahul Antony | The Solaris Champion |
| 19 | **841** | Ram Virath | The Aegis Voyager |
| 20 | **842** | Rohit manas | The Astral Visionary |
| 21 | **843** | Roshannah | The Constellation Muse |
| 22 | **844** | Rositha | The Seraphic Bloom |
| 23 | **845** | Sai Ashwinth | The Quantum Engineer |
| 24 | **846** | Sarvesh | The Ironclad Achiever |
| 25 | **847** | Selva sidhhanya | The Starlight Philosopher |
| 26 | **848** | Sri sharini selvan | The Heartlight Scholar |
| 27 | **849** | Suriya dharshini | The Sunshine Voyager |
| 28 | **850** | Tarun sanjiv | The Cyber Pathfinder |
| 29 | **851** | Varshini | The Celestial Maven |

---

## 🛠️ Technology Stack

- **React 18** with **Vite**
- **Tailwind CSS** with custom paper, starlight & holographic extensions
- **Lucide React** icons
- **React Router v6**
- **Canvas Confetti** & Web Audio API for celebratory effects
- **QRCode** for offline client-side QR generation
- **html2canvas** for saving magazine covers & certificates as PNG images

---

## 🌐 Netlify Deployment

This repository is pre-configured with `netlify.toml` and `public/_redirects`:

1. Connect this GitHub repository in [Netlify](https://app.netlify.com/).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

All routes (including `/login`, `/star/:pin`, and `/admin`) will resolve seamlessly.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Run automated student validation tests
npm test

# Start local development server
npm run dev

# Build for production
npm run build
```

---

❤️ *Dedicated to the 29 brilliant stars of Grade 8B.*

# 🌤️ Weather App

A modern weather application built with **React + Vite**, supporting **Arabic & English** with real-time data from OpenWeatherMap API.

> 🎓 This is the first project I built after completing the React course in November 2025 — a simple but complete app that puts the fundamentals into practice.

---

## UI Interface

![Weather App Preview](public/weather-app.png)

---

## ✨ Features

- 🌡️ Real-time temperature (current, min, max)
- 🌍 Arabic & English language support (i18next)
- 📅 Localized date & time (moment.js)
- ⚡ Redux Toolkit for state management
- 🎨 Tailwind CSS v4 for styling
- 📱 Fully responsive design

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
git clone https://github.com/nourhan-ibrahim-atlam/weather-app.git
cd weather-app
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
VITE_WEATHER_LAT=30.03
VITE_WEATHER_LON=31.23
```

> 🔑 Get your free API key from [openweathermap.org](https://openweathermap.org/api)

### Run Development Server

```bash
npm run dev
```

App runs at `http://localhost:5173`

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🗂️ Project Structure

```
weather/
├── public/
│   ├── locales/
│   │   └── ar/
│   │       └── translation.json
│   ├── backgroundImage.jpg
│   ├── logo.jpg
│   ├── weather-app.png
│   ├── sitemap.xml
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── Components/
│   │   └── Weather.jsx
│   ├── Reducers/
│   │   └── WeatherReducer.js
│   ├── weatherApiSlice.js
│   ├── store.js
│   ├── i18n.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── vite.config.js
└── package.json
```

---

## 🌐 SEO

### `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-domain.com/</loc>
    <lastmod>2025-11-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

> 💡 Replace `https://your-domain.com` with your actual deployed URL (e.g., from Vercel or Netlify).

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI Framework |
| Vite | 7 | Build Tool |
| Redux Toolkit | 2 | State Management |
| Tailwind CSS | 4 | Styling |
| i18next | 25 | Internationalization |
| moment.js | 2 | Date Formatting |
| axios | 1 | HTTP Client |

---

## 🌐 API Reference

Uses [OpenWeatherMap Current Weather API](https://openweathermap.org/current):

```
GET https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={key}
```

---

## 📄 License

MIT License © 2025
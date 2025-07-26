<h1 align="center">🖼️ Image Generator System</h1>

<p align="center">
  A sleek image search web app powered by the Unsplash API. Users can search and view high-quality images in real-time with a clean React + Vite interface.
</p>

---

## 🌐 Live Demo

- **URL:** [api-system-i2rx.onrender.com](https://api-system-i2rx.onrender.com)

---

## 🚀 Features

- 🔍 Real-time image search via Unsplash API  
- ⚡ Splash screen with loading animation  
- 🖼️ Display author names with images  
- 📌 Predefined topic buttons (Nature, Cats, Birds, Shoes, etc.)  
- ❌ Clear search input button  
- ⏳ Loading spinner when fetching data  
- 📱 Fully responsive design  
- 🎨 Styled with Tailwind CSS

---

## 🛠️ Tech Stack

| Layer        | Technologies Used                 |
|--------------|------------------------------------|
| **Frontend** | Vite + React + Tailwind CSS        |
| **API**      | Unsplash API (via Access Key)      |
| **Icons**    | React Icons                        |
| **Deployment** | Render (for hosting frontend)    |

---

## 📁 Project Structure

```bash
/image-generator-system
├── /public             # Static assets
├── /src
│   ├── App.jsx         # Main app structure
│   ├── Hero.jsx        # Core component handling search and display
│   └── index.css       # Tailwind CSS
├── .env                # Contains VITE_UNSPLASH_ACCESS_KEY
├── vite.config.js      # Vite config
└── package.json        # Project metadata and dependencies


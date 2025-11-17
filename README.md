# TetraX AI - Modern Website

A beautiful, modern website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **React 18** - Modern React with Hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Powerful animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
TetraX/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── index.js
│   ├── layout/          # Layout components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── FeaturesPage.jsx
│   │   ├── PricingPage.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── sections/        # Page sections
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── PricingSection.jsx
│   │   └── CTA.jsx
│   ├── routes/          # Route configuration
│   │   └── index.jsx
│   ├── constants/       # App constants
│   │   └── index.js
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Features

- ✨ Modern, clean UI design
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive on all devices
- 🎨 Beautiful gradient effects
- ⚡ Lightning-fast performance
- 🧭 Client-side routing with React Router
- 🎯 Well-organized component structure
- 🔧 Reusable UI components
- 📦 Production-ready build

## 🛠️ Development

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code with ESLint

## 🎯 Pages

- **Home** (`/`) - Landing page with hero, features, pricing, and CTA
- **Features** (`/features`) - Detailed features showcase
- **Pricing** (`/pricing`) - Pricing plans and FAQ
- **About** (`/about`) - Company information and team
- **Contact** (`/contact`) - Contact form and information

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js` and uses Tailwind's default palette. The primary colors are:
- Indigo (600) - Main brand color
- Cyan (500) - Secondary brand color

### Components

Reusable components are in `src/components/`:
- `Button` - Customizable button with variants
- `Card` - Card component with hover effects
- `LoadingSpinner` - Loading indicator

### Animations

All animations use Framer Motion. Custom animations are defined in components using motion components.

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
```

## 🚀 Deployment

Build the project and deploy the `dist` folder to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by the TetraX team

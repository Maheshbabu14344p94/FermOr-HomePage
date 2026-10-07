# Fermor — Financial Clarity, Reimagined

A polished, responsive homepage concept for **Fermor**, designed to make personal finance feel clearer, calmer, and more actionable.

This project was created as part of the **Fermor Frontend Developer Assignment**.

---

## ✨ Overview

Fermor is focused on helping people understand, act and grow financially.

For this assignment, I designed and developed an original SaaS-style homepage that communicates Fermor's financial-product positioning through:

- Premium visual design
- Clear product storytelling
- Interactive financial visualizations
- Responsive layouts
- Smooth micro-interactions
- Accessible interactions
- A strong financial-product visual language

The goal was not to reproduce an existing website, but to create an original interpretation of how Fermor could present itself as a modern financial platform.

---

---

## 📸 Screenshots

### Desktop — Hero

![Fermor Desktop Hero] ![alt text](<Screenshot 2026-10-07 122343-2.png>)

### Mobile

![Fermor Mobile] ![alt text](<Screenshot 2026-10-07 122525.png>)

> Add the screenshots to the `screenshots/` directory before submitting the repository.

---

## 🎯 Assignment

The original assignment asked for a new Fermor homepage with freedom over the visual direction, layout, sections and user experience.

The implementation focuses on the requested areas:

- Polished and professional homepage
- Clear understanding of Fermor and its users
- Original product and UX direction
- Responsive desktop and mobile experience
- Strong typography and spacing
- Attention to visual hierarchy
- Working implementation rather than a static design

---

## 🧩 Key Features

### Premium SaaS Interface

The interface uses a modern financial SaaS visual language with:

- Layered cards
- Soft gradients
- Glass-like surfaces
- Subtle shadows
- Elevated containers
- Depth and perspective
- Financial data visualization
- Floating interface elements

### Interactive Hero

The hero section includes an interactive financial dashboard-style composition with:

- Portfolio visualization
- Financial metrics
- Floating cards
- Interactive hover states
- Subtle depth effects
- Animated visual elements

### Product Storytelling

The homepage is structured around the user's financial journey:

1. Understand your money
2. See what matters
3. Take meaningful action
4. Build better financial habits
5. Grow with confidence

### Early Access Interaction

The homepage includes an interactive early-access flow with:

- Email input
- Validation
- Success state
- Error handling
- Toast feedback
- Persistent client-side state

### Responsive Design

The interface adapts to:

- Desktop
- Laptop
- Tablet
- Mobile

Navigation, cards, typography, spacing and content layouts adjust appropriately for smaller screens.

### Accessibility

The implementation includes:

- Semantic HTML
- Keyboard-friendly interactions
- Focus states
- Accessible form controls
- Appropriate contrast
- Reduced-motion support
- Descriptive interactive elements

---

## 🛠️ Tech Stack

- React
- Vite
- CSS
- JavaScript
- Responsive CSS
- Modern browser APIs

---

## 📁 Project Structure

```text
fermOR-homepage/
│
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
│
├── screenshots/
│   ├── desktop-hero.png
│   ├── desktop-product.png
│   └── mobile.png
│
├── index.html
├── package.json
├── README.md
└── .gitignore
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js 18+
- npm

Check your versions:

```bash
node --version
npm --version
```

---

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/fermOR-homepage.git
```

Move into the project:

```bash
cd fermOR-homepage
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🎨 Design Decisions

### Calm Financial Aesthetic

Financial products can easily become visually overwhelming.

Instead of using an aggressive fintech aesthetic, this concept uses a calmer visual language with:

- Deep neutral surfaces
- Controlled gradients
- Large typography
- Generous spacing
- Clear data hierarchy

This makes financial information feel more approachable.

### Data as the Visual Language

Instead of relying heavily on decorative imagery, financial information itself becomes part of the visual design.

Charts, balances, progress indicators and financial metrics create the visual identity of the product.

### Progressive Disclosure

The homepage does not expose every piece of information immediately.

The user first understands:

**What Fermor is → Why it matters → How it works → What the experience feels like → Take action**

This keeps the experience focused.

### 3D & Depth

Depth effects are used to create hierarchy rather than as decoration.

Examples include:

- Layered dashboard cards
- Perspective effects
- Floating elements
- Elevated panels
- Subtle shadows

The effects are intentionally restrained so that the financial content remains the focus.

---

## 📱 Responsive Approach

The layout was designed responsively rather than simply scaling the desktop version down.

On mobile:

- Navigation collapses
- Cards stack vertically
- Typography scales
- Dashboard elements reorganize
- Spacing is reduced
- Interactive elements remain touch-friendly

---

## ♿ Accessibility

Accessibility was considered throughout the implementation.

The project includes:

- Semantic elements
- Keyboard-accessible controls
- Visible focus states
- Form labels
- Accessible buttons
- Reduced-motion consideration
- Responsive typography
- Readable contrast

---

## ⚡ Performance

The implementation avoids unnecessary heavy dependencies and excessive animation.

Animations are primarily CSS-based and are designed to remain lightweight.

The visual effects are intentionally limited to areas where they contribute to the product experience.

---

## 🧪 Testing

Before submission, verify:

```bash
npm install
npm run dev
```

Then manually test:

- Navigation
- Hero interactions
- Buttons
- Early-access form
- Form validation
- Success states
- Responsive layouts
- Mobile navigation
- Keyboard navigation
- Hover interactions
- Reduced-motion behavior

Also run:

```bash
npm run build
```

to verify the production build.

---

## 📦 Deployment

The project can be deployed using Vercel, Netlify or another static frontend hosting platform.

### Vercel

1. Push the project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Vercel detects the Vite project.
5. Deploy.
6. Add the resulting URL to the **Live Demo** section above.

---

## 🔐 Environment Variables

This project does not require a backend database or private API credentials for the homepage experience.

If environment variables are added in the future, document them here:

```text
VITE_EXAMPLE_VARIABLE=
```

Do not commit private credentials or API keys to the repository.

---

## 💡 Product Thinking

The homepage was designed around one central idea:

> **Financial information should help people make decisions, not simply show them numbers.**

The experience therefore emphasizes clarity, context and actionable financial information instead of presenting a traditional finance dashboard filled with disconnected metrics.

---

## 📌 Assignment Deliverables

| Requirement | Status |
|---|---|
| Professional homepage | ✅ |
| Original visual direction | ✅ |
| Responsive design | ✅ |
| Mobile experience | ✅ |
| Working implementation | ✅ |
| Typography & spacing | ✅ |
| Product thinking | ✅ |
| Interactive experience | ✅ |
| Accessibility considerations | ✅ |
| README | ✅ |
| Screenshots | Add to `/screenshots` |
| GitHub repository | Deployment step |
| Live deployment | Deployment step |

---

## 👨‍💻 Author

**Mahesh Babu Singampalli**

Frontend Developer

---

## 📄 License

This project was created for the Fermor Frontend Developer Assignment.
# Personal Portfolio – ALEENA JOBY

A complete, modern, elegant, and fully responsive personal portfolio website built with **Vite**, **React**, **Tailwind CSS**, and **Framer Motion**.

Designed specifically for **Aleena Joby**, a first-year Computer Science Engineering student from Kerala, India.

---

## ✨ Features & Design Highlights

- **Aesthetic**: Premium minimalist aesthetic with generous whitespace, subtle borders, soft shadows, and refined blue accents.
- **Color Palette**:
  - Background: `#FAF9F6` (Alabaster / Warm off-white)
  - Cards: `#FFFFFF`
  - Primary Blue: `#3478D4`
  - Light Blue Accents: `#EEF5FF`
  - Primary Text: `#20232A`
  - Secondary Text: `#737780`
  - Borders: `#EAE8E3`
- **Typography**:
  - Headings: **DM Sans**
  - Body: **Inter**
- **Centralized Configuration**: All personal info, skills, education, and links are managed in one clean file: `src/data/portfolio.js`.
- **Honest Beginner State**: Technical skills and social links are not invented. The skills section highlights foundational learning, and empty social links are automatically hidden without broken placeholders.
- **Responsive Navigation**: Sticky header with scroll detection, active section indicator, and an animated mobile drawer.
- **Accessible Contact Form**: Includes field validation, accessible ARIA labels, and a `mailto:` client fallback. Never fakes backend submissions.
- **Animations**: Lightweight Framer Motion entrance effects, scroll reveals, and micro-interactions that respect `prefers-reduced-motion`.
- **SEO Ready**: Proper Open Graph meta tags, semantic HTML5 structure, and an SVG favicon.

---

## 📁 Project Structure

```text
src/
├── assets/
│   └── profile.jpg          # Profile photo placeholder (replace with your photo)
├── components/
│   ├── Navbar.jsx           # Sticky responsive navigation with active indicators
│   ├── Footer.jsx           # Minimalist footer with dynamic year & back-to-top
│   ├── SectionHeading.jsx   # Consistent typography and scroll animations
│   ├── ProfileImage.jsx     # Decorative container, borders, and error fallback
│   └── SocialLinks.jsx      # Filtered social links (hides missing URLs)
├── sections/
│   ├── Hero.jsx             # Hero section with headline, intro, CTAs & photo
│   ├── About.jsx            # Bio and 3 minimal focus cards
│   ├── Skills.jsx           # Foundation learning message & 4 category cards
│   ├── Education.jsx        # First-year B.Tech CSE timeline card
│   └── Contact.jsx          # Form with validation & mailto fallback
├── data/
│   └── portfolio.js         # Single centralized configuration file
├── App.jsx                  # Main application container
├── main.jsx                 # React root renderer
└── index.css                # Tailwind directives, custom scrollbar & theme
```

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have **Node.js** (v18 or newer) and **npm** installed on your system.

### 2. Installation
Open a terminal in the project directory and run:

```bash
npm install
```

### 3. Start Development Server
Run the local development server:

```bash
npm run dev
```

The application will run locally at `http://localhost:3000` (or the port Vite indicates).

### 4. Build for Production
To generate an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✏️ How to Customize Your Details

All details can be updated directly inside [`src/data/portfolio.js`](./src/data/portfolio.js):

### 1. Replace Profile Photo
- Put your personal photo in `src/assets/profile.jpg` (maintaining the same filename or updating the import in `src/components/ProfileImage.jsx`).

### 2. Add Your Skills
In `src/data/portfolio.js`, locate the `skills` object and add strings to the category arrays:
```javascript
categories: [
  {
    name: "Programming Languages",
    skills: ["Python", "C"], // Add items here!
  },
  ...
]
```
Whenever items are added, they will automatically appear as neat badge tags in the skills cards.

### 3. Add College or University Details
In `src/data/portfolio.js`, update the `education.timeline` array:
```javascript
college: "Government Engineering College, Barton Hill", // your college
university: "APJ Abdul Kalam Technological University (KTU)",
duration: "2024 - 2028",
graduationYear: "2028",
```

### 4. Add Contact Email & Social Links
In `src/data/portfolio.js`, add your URLs:
```javascript
contact: {
  email: "aleenajoby@gmail.com",
  socials: {
    github: "https://github.com/aleenajoby",
    linkedin: "https://linkedin.com/in/aleenajoby",
  }
}
```
*Note: Any social profile left with an empty string `""` will stay hidden automatically.*

---

## 🛠️ Technology Stack

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)
- [Google Fonts](https://fonts.google.com/) (Inter & DM Sans)

"# portfolio" 
"# portfolio" 

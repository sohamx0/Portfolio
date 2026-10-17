# Modern Portfolio Website

A premium, minimal portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, clean design inspired by premium developer portfolios
- 🌓 Dark mode + light mode support
- 🎨 Smooth animations and page transitions
- 📱 Fully responsive (mobile-first design)
- ⚡ Fast performance with Next.js App Router
- 🎯 TypeScript for type safety
- 💅 Tailwind CSS for styling
- 🔄 Framer Motion for animations

## Tech Stack

- **Framework:** Next.js 15.1.0
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Font:** Inter (Google Fonts)

## Getting Started

### Installation

First, install the dependencies:

```bash
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ThemeProvider.tsx
│   └── hooks/
│       └── useInView.ts
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

## Customization

### Update Personal Information

1. **Hero Section:** Edit `src/components/sections/Hero.tsx`
   - Update name, tagline, and social links

2. **About Section:** Edit `src/components/sections/About.tsx`
   - Update bio and skills

3. **Projects Section:** Edit `src/components/sections/Projects.tsx`
   - Add/modify projects in the `projects` array

4. **Experience Section:** Edit `src/components/sections/Experience.tsx`
   - Add/modify experience in the `experiences` array

5. **Contact Section:** Edit `src/components/sections/Contact.tsx`
   - Update email and contact links

### Color Scheme

Edit `src/app/globals.css` to customize colors:

```css
:root {
  --background: #fafafa;
  --foreground: #0a0a0a;
}
```

### Fonts

The project uses Inter font by default. To change it:

1. Edit `src/app/layout.tsx`
2. Import your desired font from `next/font/google`
3. Update the font variable

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## License

MIT License - feel free to use this project for your personal portfolio!

## Credits

Design inspired by modern developer portfolios with a focus on typography and whitespace.

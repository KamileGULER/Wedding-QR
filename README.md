# Wedding Template 🎉

Modern, responsive wedding website template built with React, TypeScript, and Vite. Perfect for couples who want to create a beautiful, customizable wedding site where guests can share photos and messages.

## ✨ Features

- 🎨 **Beautiful Design**: Modern, responsive design with pastel wedding theme
- 📱 **Mobile First**: Optimized for all devices
- 🖼️ **Photo Sharing**: Guests can upload and share wedding photos
- 💬 **Message Board**: Leave heartfelt messages and wishes
- 📍 **Event Details**: Display wedding events with maps integration
- 🔍 **SEO Optimized**: Built-in SEO with Open Graph and Twitter Cards
- 🚀 **Fast Performance**: Built with Vite for optimal performance
- 🎯 **TypeScript**: Full type safety and better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the template**
   ```bash
   # Using degit (recommended)
   npx degit your-username/wedding-template my-wedding-site
   
   # Or clone directly
   git clone https://github.com/your-username/wedding-template.git my-wedding-site
   ```

2. **Install dependencies**
   ```bash
   cd my-wedding-site
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## ⚙️ Configuration

### 1. Site Configuration (`src/site.config.ts`)

This is the **main configuration file** where you customize everything:

```typescript
export const siteConfig: SiteConfig = {
  coupleNames: {
    groom: "Your Name",
    bride: "Partner Name", 
    full: "Your Name & Partner Name"
  },
  
  seo: {
    title: "Your Wedding Title",
    description: "Your wedding description",
    canonicalUrl: "https://your-wedding-site.com"
  },
  
  events: [
    {
      id: "ceremony",
      title: "💒 Wedding Ceremony",
      date: "15 December 2024",
      time: "14:00",
      location: "Your Venue Name",
      mapUrl: "https://maps.google.com/..."
    }
  ],
  
  contacts: [
    {
      familyName: "Your Family",
      phone: "+90 555 123 4567"
    }
  ]
};
```

### 2. Assets

Replace the placeholder images in `public/assets/`:

- `hero.jpg` - Hero section background (1200x800 recommended)
- `couple.jpg` - Couple photo for services section
- `about.jpg` - About section photo
- `og.jpg` - Open Graph image (1200x630 recommended)

### 3. Environment Variables

Create a `.env` file in the root directory:

```bash
# Site Configuration
VITE_SITE_URL=https://your-wedding-site.com
VITE_SITE_NAME="Your Names Wedding"

# Social Media
VITE_INSTAGRAM_URL=https://instagram.com/yourusername
VITE_WHATSAPP_URL=https://wa.me/905551234567

# Contact
VITE_CONTACT_EMAIL=hello@your-wedding.com
VITE_CONTACT_PHONE=+90 555 123 4567
```

## 📁 File Structure

```
wedding-template/
├── public/
│   └── assets/          # Your wedding photos
│       ├── hero.jpg     # Hero background
│       ├── couple.jpg   # Couple photo
│       ├── about.jpg    # About section photo
│       └── og.jpg       # Social media image
├── src/
│   ├── components/      # React components
│   ├── site.config.ts   # MAIN CONFIG FILE ✨
│   └── ...
├── .env.template        # Environment variables template
└── README.md           # This file
```

## 🎨 Customization

### Colors & Styling

The template uses CSS custom properties for easy color customization. Edit `src/index.css`:

```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  --color-accent: #f093fb;
  --color-divider: #f3c6d3;
}
```

### Layout & Sections

All content comes from `site.config.ts`. You can:

- Add/remove wedding events
- Customize contact information
- Modify step-by-step instructions
- Update social media links
- Change all text content

### Adding New Sections

1. Add new section data to `site.config.ts`
2. Create the component in `src/components/`
3. Import and use in `App.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Netlify

1. Push your code to GitHub
2. Connect to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

```bash
npm run deploy
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run type-check` - TypeScript type checking

### Adding Dependencies

```bash
npm install package-name
```

### Project Structure

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Bootstrap 5** for responsive components
- **React Helmet Async** for SEO management
- **Jest** for testing

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface
- Optimized images and assets
- Fast loading on mobile networks

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using modern web technologies
- Inspired by beautiful wedding websites
- Special thanks to the React and Vite communities

---

**Happy Wedding Planning! 💕**

*Made with love for couples who want something special*

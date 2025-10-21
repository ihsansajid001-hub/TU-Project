# Team United Website - Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)

You can check your current versions by running:
```bash
node --version
npm --version
```

## Installation Steps

### 1. Clone or Download the Project

If you have the project files, navigate to the project directory:
```bash
cd team-united-website
```

### 2. Install Dependencies

Run one of the following commands to install all required dependencies:

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

This will install all dependencies listed in `package.json`, including:
- React 18
- React Router DOM
- Motion (Framer Motion)
- Tailwind CSS v4
- Lucide React (icons)
- Radix UI components
- And more...

### 3. Start Development Server

After installation is complete, start the development server:

Using npm:
```bash
npm run dev
```

Using yarn:
```bash
yarn dev
```

The application will open in your default browser at `http://localhost:5173` (or another port if 5173 is already in use).

### 4. Build for Production

To create an optimized production build:

Using npm:
```bash
npm run build
```

Using yarn:
```bash
yarn build
```

The built files will be in the `dist` directory.

### 5. Preview Production Build

To preview the production build locally:

Using npm:
```bash
npm run preview
```

Using yarn:
```bash
yarn preview
```

## Project Structure

```
team-united-website/
├── components/          # React components
│   ├── ui/             # Shadcn UI components
│   ├── figma/          # Figma imported components
│   └── ...             # Feature components
├── lib/                # Utilities and mock data
├── styles/             # Global styles and Tailwind config
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── package.json        # Project dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Setup

This project uses:
- **Vite** as the build tool
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **React Router** for navigation
- **Motion** for animations

## Design Features

- **Dark Mode by Default** - Toggleable light/dark theme
- **Responsive Design** - Mobile-first approach
- **Custom Typography** - Bebas Neue, Outfit, and Sora fonts
- **Orange & White Color Scheme** - Brand colors
- **Glassmorphism Effects** - Modern UI design
- **Smooth Animations** - Enhanced user experience

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors
Try deleting `node_modules` and reinstalling:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
Make sure you're using the correct Node.js version (18+):
```bash
node --version
```

### Styling Issues
Ensure Tailwind CSS is properly configured. The styles are in `styles/globals.css`.

## Support

For issues or questions about the Team United website, please contact the development team.

## License

This project is proprietary to Team United organization.

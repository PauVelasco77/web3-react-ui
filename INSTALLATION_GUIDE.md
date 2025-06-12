# Installation Guide for @pauvelasco77/web3-react-ui

## Quick Start

### 1. Install the package

```bash
npm install @pauvelasco77/web3-react-ui
# or
yarn add @pauvelasco77/web3-react-ui
# or
pnpm add @pauvelasco77/web3-react-ui
```

### 2. Import styles (REQUIRED)

**This is the most important step!** The components won't work without importing the styles.

#### Option A: Import in your JavaScript/TypeScript file

```tsx
// Import styles first (required for components to work)
import '@pauvelasco77/web3-react-ui/styles';

// Then import components
import { Button, Input } from '@pauvelasco77/web3-react-ui';

function App() {
  return (
    <div>
      <Button variant="default">Hello World</Button>
      <Input placeholder="Type something..." />
    </div>
  );
}
```

#### Option B: Import in your CSS file

```css
/* In your main CSS file (e.g., src/index.css, src/App.css) */
@import '@pauvelasco77/web3-react-ui/styles';
```

### 3. TypeScript Support

The library includes full TypeScript support:

```tsx
import '@pauvelasco77/web3-react-ui/styles';
import { Button, type ButtonProps } from '@pauvelasco77/web3-react-ui';

// All props are properly typed
const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

// Variant prop is fully typed
<Button variant="destructive" size="lg">
  Delete Account
</Button>
```

## Framework-Specific Instructions

### Next.js

#### App Router (Next.js 13+)

Import styles in your root layout:

```tsx
// app/layout.tsx
import '@pauvelasco77/web3-react-ui/styles';
import './globals.css'; // Your other styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

#### Pages Router (Next.js 12 and below)

Import styles in your `_app.tsx`:

```tsx
// pages/_app.tsx
import '@pauvelasco77/web3-react-ui/styles';
import '../styles/globals.css'; // Your other styles
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### Vite

Import styles in your main entry file:

```tsx
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@pauvelasco77/web3-react-ui/styles'; // Import styles
import './index.css'; // Your other styles
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Create React App

Import styles in your `src/index.js` or `src/index.tsx`:

```tsx
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@pauvelasco77/web3-react-ui/styles'; // Import styles
import './index.css'; // Your other styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Troubleshooting

### ❌ Styles not appearing?

**Problem**: Components render but have no styling.

**Solution**: Make sure you've imported the styles:

```tsx
// ✅ Correct
import '@pauvelasco77/web3-react-ui/styles';
import { Button } from '@pauvelasco77/web3-react-ui';

// ❌ Wrong - missing styles import
import { Button } from '@pauvelasco77/web3-react-ui';
```

### ❌ TypeScript errors about 'variant' prop?

**Problem**: TypeScript says `variant` doesn't exist on Button.

**Solution**: Make sure you're importing from the correct path and the library is properly installed:

```tsx
// ✅ Correct
import { Button, type ButtonProps } from '@pauvelasco77/web3-react-ui';

// Check that variant is properly typed
const button = <Button variant="destructive" />; // Should work
```

### ❌ CSS conflicts with your existing styles?

**Problem**: The component styles conflict with your app's styles.

**Solution**: The library uses CSS custom properties. You can override them:

```css
/* Override the library's theme variables */
:root {
  --primary: your-color-here;
  --background: your-background-here;
}
```

## Available Components

### Button

```tsx
<Button variant="default" size="md">Default</Button>
<Button variant="destructive" size="lg">Delete</Button>
<Button variant="outline" size="sm">Cancel</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Input

```tsx
<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="Enter email..." />
<Input type="password" placeholder="Enter password..." />
```

## Need Help?

If you're still having issues:

1. Make sure you've imported the styles: `import '@pauvelasco77/web3-react-ui/styles';`
2. Check that the package is properly installed: `npm list @pauvelasco77/web3-react-ui`
3. Verify your bundler supports CSS imports
4. Check the browser console for any error messages 
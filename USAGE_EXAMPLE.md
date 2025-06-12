# Usage Example

Here's a complete example of how to use `@pauvelasco77/web3-react-ui` in your React project:

## 1. Install the package

```bash
npm install @pauvelasco77/web3-react-ui
```

## 2. Basic Usage

```tsx
// App.tsx
import React from 'react';
import { Button, Input } from '@pauvelasco77/web3-react-ui';

function App() {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Web3 React UI Components</h1>
      
      {/* Button Examples */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Buttons</h2>
        <div className="flex gap-2 flex-wrap">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        
        <div className="flex gap-2 flex-wrap">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">🚀</Button>
        </div>
      </div>

      {/* Input Examples */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Inputs</h2>
        <Input 
          placeholder="Enter your wallet address..." 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Enter your private key..." 
        />
        <Input 
          type="email" 
          placeholder="Enter your email..." 
          className="w-full max-w-md"
        />
      </div>

      {/* Dark Mode Example */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Dark Mode</h2>
        <p>Add the <code>dark</code> class to any parent element to enable dark mode:</p>
        <div className="dark p-4 rounded-lg bg-background">
          <Button variant="default" className="mr-2">Dark Button</Button>
          <Input placeholder="Dark input..." className="max-w-xs" />
        </div>
      </div>
    </div>
  );
}

export default App;
```

## 3. With Tailwind CSS (Recommended)

If your project uses Tailwind CSS, the components will integrate seamlessly:

```tsx
// Example with Tailwind classes
function MyComponent() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <Button 
        variant="default" 
        className="w-full mb-4"
        onClick={() => console.log('Connected!')}
      >
        Connect Wallet
      </Button>
      
      <Input 
        placeholder="Search tokens..." 
        className="mb-4"
      />
      
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          Cancel
        </Button>
        <Button variant="default" size="sm" className="flex-1">
          Confirm
        </Button>
      </div>
    </div>
  );
}
```

## 4. Custom Styling

You can override the default theme by modifying CSS custom properties:

```css
/* In your global CSS file */
:root {
  /* Override primary colors */
  --primary: oklch(60% 0.15 270); /* Purple primary */
  --primary-foreground: oklch(100% 0 0); /* White text */
  
  /* Override border radius */
  --radius: 1rem; /* More rounded corners */
}

/* Dark mode overrides */
.dark {
  --primary: oklch(70% 0.15 270); /* Lighter purple for dark mode */
}
```

## 5. TypeScript Support

The package includes full TypeScript support:

```tsx
import type { ButtonProps } from '@pauvelasco77/web3-react-ui';

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  loading, 
  children, 
  ...props 
}) => {
  return (
    <Button {...props} disabled={loading || props.disabled}>
      {loading ? 'Loading...' : children}
    </Button>
  );
};
```

## Troubleshooting

### Styles not appearing?

Make sure you're importing the components correctly. The styles should be automatically included:

```tsx
// ✅ Correct - styles are automatically imported
import { Button } from '@pauvelasco77/web3-react-ui';

// ❌ Don't do this unless you need to import styles separately
import '@pauvelasco77/web3-react-ui/src/style.css';
```

### Using with Next.js?

The package works out of the box with Next.js. Just import and use:

```tsx
// pages/index.tsx or app/page.tsx
import { Button, Input } from '@pauvelasco77/web3-react-ui';

export default function Home() {
  return (
    <main>
      <Button>Hello Next.js!</Button>
    </main>
  );
}
``` 
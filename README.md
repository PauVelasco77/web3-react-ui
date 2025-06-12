# @pauvelasco77/web3-react-ui

A collection of React UI components for Web3 applications, built with Tailwind CSS and TypeScript.

## Installation

```bash
npm install @pauvelasco77/web3-react-ui
```

## Usage

### Importing Components

```tsx
import { Button, Input } from '@pauvelasco77/web3-react-ui';

function App() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Input placeholder="Enter text..." />
    </div>
  );
}
```

### Importing Styles

The styles are automatically imported when you import the components. However, if you need to import them separately, you can do so:

```tsx
// This is automatically included when importing components
import '@pauvelasco77/web3-react-ui/src/style.css';
```

### Components

#### Button

```tsx
import { Button } from '@pauvelasco77/web3-react-ui';

<Button variant="default" size="md">
  Default Button
</Button>

<Button variant="destructive" size="lg">
  Destructive Button
</Button>

<Button variant="outline" size="sm">
  Outline Button
</Button>
```

**Props:**
- `variant`: `"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"`
- `size`: `"default" | "sm" | "lg" | "icon"`
- `asChild`: `boolean` - Render as child component using Radix Slot

#### Input

```tsx
import { Input } from '@pauvelasco77/web3-react-ui';

<Input 
  type="text" 
  placeholder="Enter your text..." 
  className="w-full"
/>
```

**Props:**
- All standard HTML input props
- `className`: Additional CSS classes

## Styling

This package uses Tailwind CSS with custom CSS variables for theming. The components support both light and dark themes automatically.

### Custom Theme Variables

The package includes CSS custom properties that you can override:

```css
:root {
  --background: oklch(100% 0 0);
  --foreground: oklch(14.5% 0 0);
  --primary: oklch(20.5% 0 0);
  --primary-foreground: oklch(98.5% 0 0);
  /* ... and many more */
}
```

## Development

This package is built with:
- React 18
- TypeScript
- Tailwind CSS v4
- Vite
- Radix UI primitives

## License

MIT 
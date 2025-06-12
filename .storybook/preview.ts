import { definePreview } from '@storybook/react-vite';
import '../src/style.css';

const preview = definePreview({
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
});

export default preview;

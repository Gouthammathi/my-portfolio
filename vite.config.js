import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),       // ensure React plugin is included
    tailwindcss(),
  ],
  resolve: {
    dedupe: ['react', 'react-dom'], // prevents multiple React instances
  },
});

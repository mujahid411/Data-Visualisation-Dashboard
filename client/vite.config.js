import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host:'localhost',
    port:'5174',
    proxy: {
      '/api':'http://localhost:5022',
    },
  },
  plugins: [react()],
});
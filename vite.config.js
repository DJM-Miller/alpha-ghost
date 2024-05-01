// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        photos: 'src/photos.html', // Specify the path to your photos.html file
      },
    },
  },
});

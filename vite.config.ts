import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Dla domeny conner.pl base musi być '/'
  base: '/',
  
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // To mapuje folder src na symbol @
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Obsługa plików statycznych
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

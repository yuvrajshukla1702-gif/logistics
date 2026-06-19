import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // this connects Tailwind to Vite

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Vite now processes Tailwind during the build
  ],
})
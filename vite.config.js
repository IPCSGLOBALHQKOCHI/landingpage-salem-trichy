import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/salem_trichy',
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // Replace with your backend's local dev port
    },
  },
  build: {
    outDir: 'dist', // Ensure it outputs the build folder to "dist"
  },
  assetsInclude: ['**/*.JPG'],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/r3-portfolio/',
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 8080,
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ejercicios-reactjs/',   // 👈 OBLIGATORIO para GitHub Pages
})

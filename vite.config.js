import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv'
config()

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_APP_URL
})

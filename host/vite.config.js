
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteA: "http://localhost:2000/assets/remoteEntry.js",
        remoteB: "http://localhost:2024/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom"]
    })
  ],
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { execSync } from 'node:child_process'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // Determine repo name for GitHub Pages base path
  let repoName = ''
  try {
    const remoteUrl = execSync('git config --get remote.origin.url', { encoding: 'utf8' }).trim()
    repoName = remoteUrl.split('/').pop()?.replace(/\.git$/, '') ?? ''
  } catch {}

  const resolvedBase = command === 'serve' ? '/' : '/Wedding-QR/'

  return ({
  base: resolvedBase,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/utils': path.resolve(__dirname, './src/utils'),
      '@/types': path.resolve(__dirname, './src/types')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          bootstrap: ['bootstrap', 'react-bootstrap']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
  })
})
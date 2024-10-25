import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import envCompatible from 'vite-plugin-env-compatible';
// https://vitejs.dev/config/

const env = loadEnv("development", process.cwd(), 'VITE')

export default defineConfig({
  plugins: [react(), envCompatible()],
  server:{
    port: env.VITE_PORT_FRONTEND,
    host: env.VITE_HOSTNAME,
  }
})
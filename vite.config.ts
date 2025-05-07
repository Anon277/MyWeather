import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/

export default defineConfig({
  base: '/MyWeather/', // замените на название вашего репозитория
  plugins: [react()],
});

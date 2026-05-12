
import { defineConfig } from 'vite';
import pkg from './package.json';

export default defineConfig({
  base: '/',
  plugins: [{
    name: 'polyple-app-version',
    transformIndexHtml: html => html.replaceAll('%APP_VERSION%', pkg.version),
  }],
  server: { open: true },
});

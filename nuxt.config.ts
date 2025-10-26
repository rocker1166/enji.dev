import { createResolver } from '@nuxt/kit';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  alias: {
    'styled-system': resolve('./styled-system'),
  },
  compatibilityDate: '2025-07-15',
  css: ['@/assets/css/main.css'],
  devServer: {
    port: 4321,
  },
  devtools: { enabled: true },
  modules: ['nitro-cloudflare-dev', '@nuxt/eslint'],
  nitro: {
    preset: 'cloudflare_module',
    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    plugins: ['~/server/index.ts'] 
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui'
  ],
  headlessui: {
    prefix: 'Headless'
  },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  },
})

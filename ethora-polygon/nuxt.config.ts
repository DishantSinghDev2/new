// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    plugins: ['~/server/index.ts'] 
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI
  }
})

import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind' // https://astro.build/config
import { loadEnv } from 'vite'

import vercel from '@astrojs/vercel/serverless'
// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    storyblok({
      accessToken: 'bRb5610UFzeXH0JFTQZQpwtt',
      apiOptions: {
        region: 'us'
      },
      components: {
        page: 'storyblok/Page',
        blogpost: 'storyblok/BlogPost',
        PostList: 'storyblok/PostList'
      }
    }),
    vue(),
    tailwind()
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  adapter: vercel()
})

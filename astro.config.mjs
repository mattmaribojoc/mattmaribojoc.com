import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vue from '@astrojs/vue'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
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
  }
})

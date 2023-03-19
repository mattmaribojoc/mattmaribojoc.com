import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind' // https://astro.build/config
import vercel from '@astrojs/vercel/edge'

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: 'bRb5610UFzeXH0JFTQZQpwtt',
      apiOptions: {
        region: 'us',
        cache: {
          clear: 'auto',
          type: 'memory'
        }
      },
      useCustomApi: false,
      bridge: true,
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
  output: 'server',
  adapter: vercel()
})

import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { VitePluginFonts } from 'vite-plugin-fonts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    VitePluginFonts({
      google: {
        families: [
          { name: 'Nunito Sans', styles: 'ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,900', defer: true },
        ],
      },
    }),
  ],

  css:{
    preprocessorOptions:{
      scss: {
        charset: false,
      }
    },
  }
})

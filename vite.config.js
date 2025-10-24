import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve('index.html'),
        history: resolve( 'history.html'),
        shows: resolve('shows.html'),
        members: resolve('members.html'),
        memberDetails: resolve('memberDetails.html'),
      },
    },
  },
})

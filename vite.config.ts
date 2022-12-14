import postcss from './postcss.config.js';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: "/ascii-tree-builder/",
	plugins: [svelte()],
  	css:{
    	postcss
  	}
})

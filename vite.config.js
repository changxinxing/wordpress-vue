import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	mode: "production",
	plugins: [vue()],
	build: {
		minify: false,
	},
	server: {
		hmr: false,
	},
})

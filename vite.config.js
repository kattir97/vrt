import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server : {
  port: 3000, // must be a port other than 5173
  host: true,
  open: true,
  watch: {
    usePolling: true,
  },
},
	build: {
		outDir: "build",
		sourcemap: true,
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "@testing-library/jest-dom",
		mockReset: true,
	},
});

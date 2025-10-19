import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/auto-deploy-projesi/",
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.js",
	},
});

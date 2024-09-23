import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";

const resolvePath = (p: string) => resolve(__dirname, p);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      include: ["./packages"],
      tsconfigPath: "./tsconfig.app.json",
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: resolvePath("packages/index.ts"),
      name: "ChooseWhen",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
});

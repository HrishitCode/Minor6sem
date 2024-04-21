import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "node:path";
import { readdir as readDir } from "node:fs/promises";
import restart from "vite-plugin-restart";
import { fileURLToPath } from "url";
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig(async ({ command }) => {
  if (command === "serve") {
    const alias = {};
    alias["@"] = resolve(__dirname, "./src");
    const data = await readDir("./src", { withFileTypes: true });
    for (const dir of data) {
      const name = dir.isDirectory()
        ? dir.name
        : dir.name.split(".").slice(0, -1).join(".");
      alias[`@${name}`] = resolve(__dirname, `./src/${dir.name}`);
    }
    return {
      plugins: [react(), restart({ restart: "src" })],
      resolve: {
        alias,
      },
      css: {
        postcss: {
          plugins: [tailwindcss()],
        },
      }
    };
  }
  return {
    plugins: [react()],
  };
});

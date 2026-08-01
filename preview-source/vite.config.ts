import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// 部署目標是 GitHub User Pages（whynot-tw/whynot-tw.github.io），
// 正式網址是網域根目錄 https://whynot-tw.github.io/，所以 base 維持 "/"。
// 若之後改成一般 Project Pages（username.github.io/repo名稱/），
// 才需要把這裡改成 "/repo名稱/"，並同步調整 client/public/404.html
// 裡的 pathSegmentsToKeep。
const GITHUB_PAGES_BASE = "/preview-v0.9/";

export default defineConfig({
  base: GITHUB_PAGES_BASE,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});

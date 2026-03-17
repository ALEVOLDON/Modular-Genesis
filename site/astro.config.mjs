import { defineConfig } from "astro/config";

const isNetlify = process.env.NETLIFY === "true" || process.env.NETLIFY === "1";
const siteUrl = isNetlify ? process.env.URL || "https://modular-genesis.netlify.app" : "https://alevoldon.github.io";
const basePath = isNetlify ? undefined : "/Modular-Genesis";

export default defineConfig({
  site: siteUrl,
  base: basePath
});

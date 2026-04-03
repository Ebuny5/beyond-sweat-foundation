import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// lovable-tagger is a dev-only tool — loaded dynamically to avoid ESM/CJS issues in production
export default defineConfig(async ({ mode }) => {
  const plugins = [react()];

  if (mode === "development") {
    const { componentTagger } = await import("lovable-tagger");
    plugins.push(...[componentTagger()].flat());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});

import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import CaseSensitivePathsWebpackPlugin from "case-sensitive-paths-webpack-plugin";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack(config, { appendPlugins }) {
      appendPlugins(new CaseSensitivePathsWebpackPlugin());
    },
  },
  html: {
    template: "./public/index.html",
  },
});

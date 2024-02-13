import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { defineConfig } from 'vite';
import path from 'path';

export default {
  root: path.resolve(__dirname, 'src/'), // Set the root directory to 'src'
    publicDir: '../static/',
    base: '/animation-controller/',
    plugins: [
        wasm(),
        topLevelAwait()
      ]
}
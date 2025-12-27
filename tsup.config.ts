import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'themes/arrachis': 'src/themes/brands/arrachis.css',
  },
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  minify: true,
  treeshake: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    }
  },
})

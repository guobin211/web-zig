console.log('Build with Bun!')

await Bun.build({
  entrypoints: ['./scripts/index.ts'],
  target: 'node',
  outdir: './dist',
  sourcemap: 'external',
  minify: false
})

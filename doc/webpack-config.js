const webpackConfig = { externals: [ [Function] ],
  optimization:
   { checkWasmTypes: false,
     nodeEnv: false,
     splitChunks: false,
     runtimeChunk: undefined,
     minimize: false,
     minimizer: [ [TerserPlugin] ] },
  recordsPath:
   '/Users/lihao/Desktop/resume/smart-resume/.next/server/records.json',
  context: '/Users/lihao/Desktop/resume/smart-resume',
  entry: [AsyncFunction: entry],
  output:
   { path: '/Users/lihao/Desktop/resume/smart-resume/.next/server',
     filename: [Function: filename],
     libraryTarget: 'commonjs2',
     hotUpdateChunkFilename: 'static/webpack/[id].[hash].hot-update.js',
     hotUpdateMainFilename: 'static/webpack/[hash].hot-update.json',
     chunkFilename: '[name].js',
     strictModuleExceptionHandling: true,
     crossOriginLoading: undefined,
     futureEmitAssets: false,
     webassemblyModuleFilename: 'static/wasm/[modulehash].wasm' },
  performance: false,
  resolve:
   { extensions: [ '.tsx', '.ts', '.js', '.mjs', '.jsx', '.json', '.wasm' ],
     modules: [ 'node_modules' ],
     alias:
      { 'next/head': 'next/dist/next-server/lib/head.js',
        'next/router': 'next/dist/client/router.js',
        'next/config': 'next/dist/next-server/lib/runtime-config.js',
        'next/dynamic': 'next/dist/next-server/lib/dynamic.js',
        next: '/Users/lihao/Desktop/resume/smart-resume/node_modules/next',
        'private-next-pages': '/Users/lihao/Desktop/resume/smart-resume/pages',
        'private-dot-next': '/Users/lihao/Desktop/resume/smart-resume/.next' },
     mainFields: [ 'main', 'module' ],
     plugins: [ [Object] ] },
  resolveLoader:
   { alias:
      { 'emit-file-loader':
         '/Users/lihao/Desktop/resume/smart-resume/node_modules/next/dist/build/webpack/loaders/emit-file-loader',
        'error-loader':
         '/Users/lihao/Desktop/resume/smart-resume/node_modules/next/dist/build/webpack/loaders/error-loader',
        'next-babel-loader':
         '/Users/lihao/Desktop/resume/smart-resume/node_modules/next/dist/build/webpack/loaders/next-babel-loader',
        'next-client-pages-loader':
         '/Users/lihao/Desktop/resume/smart-resume/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader',
        'next-data-loader':
         '/Users/lihao/Desktop/resume/smart-resume/node_modules/next/dist/build/webpack/loaders/next-data-loader',
        'next-serverless-loader':
         '/Users/lihao/Desktop/resume/smart-resume/node_modules/next/dist/build/webpack/loaders/next-serverless-loader',
        'noop-loader':
         '/Users/lihao/Desktop/resume/smart-resume/node_modules/next/dist/build/webpack/loaders/noop-loader',
        'next-plugin-loader':
         '/Users/lihao/Desktop/resume/smart-resume/node_modules/next/dist/build/webpack/loaders/next-plugin-loader' },
     modules: [ 'node_modules' ],
     plugins: [ [Object] ] },
  module:
   { rules: [ [Object], [Object] ], strictExportPresence: true },
  plugins:
   [ ChunkNamesPlugin {},
     DefinePlugin { definitions: [Object] },
     UnlinkRemovedPagesPlugin { prevAssets: {} },
     NoEmitOnErrorsPlugin {},
     NextJsRequireCacheHotReloader { prevAssets: null },
     PagesManifestPlugin { serverless: false },
     NextJsSsrImportPlugin { options: [Object] },
     NextJsSsrImportPlugin {} ],
  mode: 'development',
  name: 'server',
  target: 'node',
  devtool: 'cheap-module-source-map' }
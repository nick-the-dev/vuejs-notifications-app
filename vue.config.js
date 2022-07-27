const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false,
  productionSourceMap: false,
  outputDir: './build/',
  configureWebpack: {
    devtool: 'source-map',
    output: {
        filename: '[name].js'
    }
  },
  pages: {
      main: {
          entry: 'src/main.js',
          template: 'public/index.html',
          filename: 'index.html',
          title: 'Notifications App',
          chunks: ['chunk-vendors', 'chunk-common', 'main']
      }
  }
});

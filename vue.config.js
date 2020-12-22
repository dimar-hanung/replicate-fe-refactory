module.exports = {
  configureWebpack: {
    performance: {
      hints: false
    },

    output: {
      filename: "js/refactory-[name].[hash:8].js",
      chunkFilename: "js/refactory-[name].[hash:8].js",
      publicPath: "/"
    },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000,
        name: "2020"
      }
    }
  },
  pwa: {
    workboxOptions: {
      skipWaiting: true
    }
  }
};

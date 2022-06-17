const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: '/online-shop/',
  css: {
    loaderOptions: {
      sass: {
          prependData: `@import "@/assets/styles/style.scss";`
      }
    }
  }
}
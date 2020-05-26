module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/abstracts/_variables.scss";
                      @import "@/scss/abstracts/_mixins.scss";`
      }
    }
  }
}

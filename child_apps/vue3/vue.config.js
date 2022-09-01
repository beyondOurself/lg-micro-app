const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: "8082",
  },

  // > 上线配置
  outputDir: `../../dist/${process.env.VUE_APP_V3_NAME}`,
  publicPath: `/${process.env.VUE_APP_V3_NAME}/`,
  // < 上线配置
});

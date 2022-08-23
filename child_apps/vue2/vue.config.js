const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: "8083",
  },
});

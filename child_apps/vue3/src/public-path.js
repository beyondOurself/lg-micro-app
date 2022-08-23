// 如果子应用不是webpack构建的，这一步可以省略。
// __MICRO_APP_ENVIRONMENT__和__MICRO_APP_PUBLIC_PATH__是由micro-app注入的全局变量
console.log(
  " window.__MICRO_APP_PUBLIC_PATH__",
  window.__MICRO_APP_PUBLIC_PATH__
);
if (window.__MICRO_APP_ENVIRONMENT__) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH__;
}

const Router = require('@koa/router');
let router = new Router();
// const index = require('_@src/service/index.js')
// D:\personal\personal-projects\koa-web-cli\src
// const printMe = require('@src/service/index.js')
// const index=import( '$components/src/service/index.js')
// console.log(index);
// console.log(printMe);
router.get('/test', (ctx, next) => {
  console.log('进入路由');
  require('../../../src/controller/test/index')(ctx, next)
});
module.exports = router
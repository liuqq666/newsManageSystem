/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var express = require('express');
const NewsController = require('../../controllers/web/NewsController');
var NewsRouter = express.Router();



NewsRouter.get("/webapi/news/list",NewsController.getList)
NewsRouter.get("/webapi/news/list/:id",NewsController.getList)
NewsRouter.get("/webapi/news/toplist",NewsController.getTopList)

module.exports = NewsRouter
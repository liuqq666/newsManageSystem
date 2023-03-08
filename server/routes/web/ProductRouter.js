/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
var express = require('express');
const ProductController = require('../../controllers/web/ProductController');
var ProductRouter = express.Router();



ProductRouter.get("/webapi/product/list",ProductController.getList)

module.exports = ProductRouter
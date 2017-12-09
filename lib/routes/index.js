const Router = require('koa-router'),
	KoaBody = require('koa-body'),
	eventsController = require('../controllers/eventsController.js');

const router = new Router();

router
	.get('/events/', eventsController.list)
	.post('/events/', KoaBody(), eventsController.create);

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
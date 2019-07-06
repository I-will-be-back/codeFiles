const router = require('koa-router')({ prefix: "/recommend" })
const Controller = require('../controllers/recommend')

router.post('/', Controller.create);

router.get('/:id', Controller.search);

module.exports = router;

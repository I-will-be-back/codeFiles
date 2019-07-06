const router = require('koa-router')({ prefix: "/xxx" })
const Controller = require('../controllers/xxx')

router.post('/', Controller.create);

router.get('/', Controller.search);
router.get('/:id', Controller.search);

module.exports = router;

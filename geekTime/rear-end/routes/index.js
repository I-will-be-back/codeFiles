const router = require('koa-router')()
const findController = require('../controllers/find');
const lectureHallController = require('../controllers/lectureHall');
const studyController = require('../controllers/study');
const mineController = require('../controllers/mine');


router.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'welcome to geektime!'
  })
})

router.get('/find/:id', findController.search)
router.get('/lectureHall', lectureHallController.search);
router.get('/study/:id', studyController.search);
router.get('/mine/:id', mineController.search);

module.exports = router

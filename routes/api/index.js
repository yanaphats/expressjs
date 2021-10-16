const router = require('express').Router()
const controllers = require('../../controllers/api/TestController')

router.get('/test', controllers.onTesting)
router.get('/test/mycloud', controllers.onTestingMyCloud)

module.exports = router
const router = require('express').Router()
const TestControllers = require('../../controllers/api/TestController')
const MyCloudControllers = require('../../controllers/api/MyCloudController')

router.get('/test', TestControllers.onTesting)
router.get('/test/mycloud', TestControllers.onTestingMyCloud)

router.post('/mycloud/token', MyCloudControllers.getToken)
router.get('/mycloud/detail', MyCloudControllers.getOrderDetail)

module.exports = router
const Router = require('express')
const router = new Router()

const mainController = require('../controllers/main_controller')

router.get('/', mainController.index)
router.get('/post', mainController.post)
router.get('/user', mainController.user)
router.get('/createUser', mainController.createUser)
router.get('/updateUser/:id', mainController.updateUser)
router.get('/createPost/:id', mainController.createPost)

module.exports = router
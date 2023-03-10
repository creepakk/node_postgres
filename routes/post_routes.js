const Router = require('express')
const router = new Router()

const postController = require('../controllers/post_controller')

router.post('/post/:id', postController.createPost)
router.get('/post/:id', postController.getPostsByUser)

module.exports = router
const db = require('../db')
const userController = require('./user_controller')
const postController = require('./post_controller')

class MainController {
    index = function (req, res) {
        res.render('index', {
            title: 'Database Learning'
        })
    }
    user = async function (req, res) {
        res.render('user', {
            title: 'User Page'
        })
    }
    post = function (req, res) {
        res.render('post', {
            title: 'Post Page',
        })
    }
    createUser = function (req, res) {
        res.render('createUser', {
            title: 'CreateUser Page'
        })
    }
    updateUser = function (req, res) {
        res.render('updateUser', {
            title: 'Update User',
            id: req.params.id
        })
    }
    createPost = function (req, res) {
        res.render('createPost', {
            title: 'CreatePost Page',
            userId: req.params.id
        })
    }
}

module.exports = new MainController()
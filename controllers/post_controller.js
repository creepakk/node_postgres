const db = require('../db')

class PostController {
    async createPost(req, res) {
        const userId = req.params.id
        const { title, content } = req.body
        const newPost = await db.query('INSERT INTO post (title, content, user_id) VALUES ($1, $2, $3) RETURNING *', [title, content, userId])
        // res.json(newPost.rows[0])
        res.render('post', {
            title: "Create Success",
            header: "Create Success",
            newPost: newPost.rows[0]
        })
    }
    async getPostsByUser(req, res) {
        const id = req.params.id
        const posts = await db.query('SELECT * FROM post WHERE user_id = $1', [id])
        // res.json(posts.rows)
        res.render('getPostsByUser', {
            id,
            posts: posts.rows,
        })
    }
}

module.exports = new PostController()
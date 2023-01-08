const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const mainRouter = require('./routes/main_router')
const userRouter = require('./routes/user_routes')
const postRouter = require('./routes/post_routes')

const PORT = process.env.PORT || 8080

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRouter)
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => console.log(`started on port ${PORT}`))
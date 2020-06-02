const express = require('express')
const postRouter = require('./routes/post')
const userRouter = require('./routes/auth')

const app = express()


app.use(express.json())

app.use('/post', postRouter)

app.use('/user', userRouter)

//app.use('/auth', authRouter)

module.exports = app

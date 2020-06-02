/*const express = require('express')

const router = express.Router()

reouter.post('/',(request, response))

module.exports = router*/



const express = require('express')
const user = require('../usecases/user')

const router = express.Router()

router.post('/login', async (request, response) => {
    try {
        const {email, password } = request.body
        const token = await user.login(email, password)

        response.json({
            success: true,
            message: 'loged in',
            data:{
                token
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})



router.post('/signup', async (request, response) => {
    try {
      const newUser = await user.signup(request.body)
      response.json({
        success: true,
        message: 'User registered',
        data: {
          user: newUser
        }
      })
    } catch (error) {
      response.status(400)
      response.json({
        success: false,
        error: error.message
      })
    }
  })

  module.exports = router
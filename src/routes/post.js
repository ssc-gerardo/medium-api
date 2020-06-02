const express = require('express')

const Posts = require('../usecases/post')

const auth = require('../middlewares/auth')

const router = express.Router()

//router.use(auth)

router.use((request, response, next)=>{
  console.log(`midleware router /post`)
  next()
})



router.get('/', async (request, response) => {
    
    try {
        const allposts = await Posts.getAll()
        response.json({
          success: true,
          message: 'all posts',
          data: {
            post: allposts
          }
        })
    } catch (error) {
        response.json({
            success: false,
            error: error.message,
            //errors: errorsArray
          })
        
    }
})


router.post('/' , auth,async (request, response) => {
    try {
      const newPost = await Posts.create(request.body)
      response.json({
        success: true,
        message: 'post created',
        data: {
          post: newPost
        }
      })
    } catch (error) {
      /*const errorsArray = Object.entries(error.errors)
        .map(([key, value]) => {
          return { [key]: value.message }
        })
        */
      response.json({
        success: false,
        error: error.message,
        //errors: errorsArray
      })
    }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params
    const postDeleted = await Posts.deleteById(id)
    response.json({
      success: true,
      message: `post with ${id} deleted`,
      data: {
        koder: postDeleted
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

router.patch('/:id' , async (request, response) => {
  try {
    const { id } = request.params
    const postUdated = await Posts.updateById(id, request.body)
    response.json({
      success: true,
      message: `post with ${id} updated`,
      data: {
        postUdated
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
const post = require('../models/post')



async function getAll () {
    const allPosts = await post.find()
    return allPosts
}

async function create (postData) {
   const postCreated = await post.create(postData)
   return postCreated
}


function deleteById (id) {
    return post.findByIdAndRemove(id)
  }
  
  function updateById (id, newPostData) {
    return post.findByIdAndUpdate(id, newPostData)
  }
  
module.exports = {
    getAll,
    create,
    deleteById,
    updateById
}
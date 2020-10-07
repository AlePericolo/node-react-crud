//import controller
const postController = require('../controllers/post');

const postRoutes = [
    {
        method: 'GET',
        url: '/post',
        handler: postController.getPosts
    },
    {
        method: 'POST',
        url: '/post',
        handler: postController.createPost
    },
    {
        method: 'POST',
        url: '/delete-post',
        handler: postController.deletePost
    }

]

//export router object
module.exports = postRoutes;
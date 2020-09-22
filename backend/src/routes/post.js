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
    }

]

//export router object
module.exports = postRoutes;
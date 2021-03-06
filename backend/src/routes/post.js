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
        url: '/get-post',
        handler: postController.getPost
    },
    {
        method: 'POST',
        url: '/save-post',
        handler: postController.savePost
    },
    {
        method: 'POST',
        url: '/delete-post',
        handler: postController.deletePost
    }

]

//export router object
module.exports = postRoutes;
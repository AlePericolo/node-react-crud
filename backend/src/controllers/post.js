const boom = require('boom')
const Post = require('../models/post');

exports.getPosts = async (req, res) => {
    try {
        const posts = Post.find({});
        return posts;
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save((err, result) => {
        if (err) {
            return res.status(400).json({ errorerror: err })
        }
        res.status(200).json({ data: result })
    })
}
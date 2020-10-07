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

exports.deletePost = (req, res) => {
    Post.findByIdAndRemove(req.body.id, (err, data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).send({ message: "post deleted" });
    });
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    post.save((err, result) => {
        if (err) {
            return res.status(400).json({ error: err })
        }
        res.status(200).json({ data: result })
    })
}


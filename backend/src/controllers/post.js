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

exports.getPost = (req, res) => {
    Post.findById(req.body.id, (err, data) => {
        if (err) return res.status(500).send(err.message);

        return res.status(200).send(data);
    })
}

exports.deletePost = (req, res) => {
    Post.findByIdAndRemove(req.body.id, (err, data) => {
        if (err) return res.status(500).send(err.message);

        return res.status(200).send({ message: "post deleted" });
    });
}

exports.savePost = (req, res) => {

    if (req.body.id)
        Post.findByIdAndUpdate({ _id: req.body.id }, req.body, (err, data) => {
            if (err) return res.status(500).send(err.message);

            return res.status(200).send(data);
        })
    Post.create(req.body, (err, data) => {
        if (err)
            return res.status(500).send(err.message);

        return res.status(200).send(data);
    });

}


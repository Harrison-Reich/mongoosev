const router = require('express').Router()
const { Post, User, Comments } = require('../models')
const passport = require('passport')

router.get('/comments', passport.authenticate('jwt'), async function (req, res){
  const comment = await Comments.find({}).populate('userpost')
  res.json(comment)
})

// post comment

router.post('/comments', passport.authenticate('jwt'), async function (req, res) {
  const post = await Post.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { posts: post._id } })
  res.json(post)
})

module.exports = router
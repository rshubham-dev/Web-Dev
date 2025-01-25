const Post = require('../models/Post');

// backend/controllers/postController.js
exports.getPostImages = async (req, res) => {
  const images = await fetch('https://api.example.com/building-designs');
  const data = await images.json();
  res.json(data);
};


// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single post by ID
exports.getPostById = async (req, res) => {
  try {
    const {id} = req.params;
    console.log('id', id)
    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(post);
    console.log(post)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new post
exports.createPost = async (req, res) => {
  const { title, content, author } = req.body;

  const newPost = new Post({ title, content, author });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// backend/controllers/postController.js
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



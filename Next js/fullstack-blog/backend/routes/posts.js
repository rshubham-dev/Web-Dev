const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// Define your routes
router.get('/posts', postController.getPosts); // Get all posts
router.get('/posts/:id', postController.getPostById); // Get a single post by ID
router.post('/posts', postController.createPost); // Create a new post
router.delete('/posts/:id', postController.deletePost); // Delete a post by ID

module.exports = router;
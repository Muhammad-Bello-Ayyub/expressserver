//CRUD APIs testings
// These are resource routes for different routes
const express = require("express"); //common js require syntax
const {
    getPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
} = require('../controllers/postControllers');
const router = express.Router();// setting router

// Get all posts
router.get('/', getPost);

// Get single post
router.get('/:id', getSinglePost);

// Create new post
router.post('/', createPost);

// Update post
router.put('/:id', updatePost);

// Delete post
router.delete('/:id', deletePost);


module.exports = router; // common js module
// export default router;
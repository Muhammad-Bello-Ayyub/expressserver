let posts = [
    {id: 1, title: 'Post One', message: 'hockey'},
    {id: 2, title: 'Post Two', message: 'football'},
    {id: 3, title: 'Post Three', message: 'tennis'},
];

// @desc    Get all posts
//@route    GET /api/posts
const getPost = (req, res, next) =>{
    const limit = parseInt(req.query.limit);

    // limit checks for posts
    if(!isNaN(limit) && limit > 0){
        res.status(200).json(posts.slice(0, limit));
    }else{
        res.status(200).json(posts);
    }
};

// @desc    Get single posts
//@route    GET /api/posts/:id
const getSinglePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    res.status(200).json(post);
};

// @desc    Create a new post
//@route    POST /api/posts/
const createPost = (req, res, next) =>{
    // console.log(req.body);
    const newPost = { 
        id: posts.length + 1,
        title: req.body.title,
        message: req.body.message
    };

    if(!newPost.title){
        // client side error handling
        const error = new Error(`Please include a title`);
        error.status = 400;
        return next(error);
    }

    posts.push(newPost);
    res.status(201).json(posts);
};

// @desc    Update post
//@route    PUT /api/posts/:id
const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    post.title = req.body.title;
    res.status(200).json(posts);
};

// @desc    Delete post
//@route    DELETE /api/posts/:id
const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post){
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};

module.exports = {
    getPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost
};














// API endpoint to send data to the client
// app.get('/api/posts', (req, res) => {
//     const data = {
//         message: "Hello from the server!",
//         timestamp: new Date()
//     };
//     res.json(posts);  // Send JSON response
// });

// Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// const express = require('express');
// const path = require('path');
// const app = express();
// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // API endpoint to send data to the client
// app.get('/api/data', (req, res) => {
//     const data = {
//         message: "Hello from the server!",
//         timestamp: new Date()
//     };
//     res.json(data);  // Send JSON response
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });



// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;

// // Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route to serve the client page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

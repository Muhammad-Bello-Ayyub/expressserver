const express = require('express');
const path  = require('path');
const posts = require( './routes/posts');
const logger = require('./middleware/logger');
const notFound = require('./middleware/NotFound');
const errorHandler = require('./middleware/error');
const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware
// This will allow us to send form data
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

// Logger middleware
app.use(logger);

// Setup static folder "public" to eccess client pages
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes definition end points
app.use('/api/posts', posts);

// Catch all Error handler
// Error handler below routes, otherwise conflicts might arise
app.use(notFound);
app.use(errorHandler);

// Start/listen the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

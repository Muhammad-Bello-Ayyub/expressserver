const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


// GET method route
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
  })
  
  // POST method route
  app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })

  app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
  })

//   This route path will match requests to the root route, //
  app.get('/', (req, res) => {
    res.send('root')
  })

//   This route path will match requests to /about.
app.get('/about', (req, res) => {
  res.send('about')
})

// This route path will match requests to /random.text.
app.get('/random.text', (req, res) => {
  res.send('random.text')
})

// Here are some examples of route paths based on string patterns.
// This route path will match acd and abcd.
app.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})

// This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd', (req, res) => {
  res.send('ab+cd')
})

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
app.get('/ab*cd', (req, res) => {
  res.send('ab*cd')
})

// This route path will match /abe and /abcde.
app.get('/ab(cd)?e', (req, res) => {
  res.send('ab(cd)?e')
})

// This route path will match anything with an “a” in it.
app.get(/a/, (req, res) => {
  res.send('/a/')
})

// This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
app.get(/.*fly$/, (req, res) => {
  res.send('/.*fly$/')
})

// To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
// Catch all route
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
  })
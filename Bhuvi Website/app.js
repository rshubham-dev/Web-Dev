const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route
app.get('/', (req, res) => {
  const isOpen = false; 
  const activePage = 'home';
  res.render('Layout', { page: 'index', isOpen, activePage });
});

app.get('/about', (req, res) => {
  const isOpen = false; 
  const activePage = 'about';
  res.render('Layout', { page: 'about', isOpen, activePage });
});

app.get('/contact', (req, res) => {
  const isOpen = false; 
  const activePage = 'contact';
  res.render('Layout', { page: 'contact', isOpen, activePage });
});

app.get('/projects', (req, res) => {
  const isOpen = false;
  const activePage = 'projects';
  res.render('Layout', { page: 'projects/projects', isOpen, activePage });
});

app.get('/blogs', (req, res) => {
  const isOpen = false;
  const activePage = 'blogs';
  res.render('Layout', { page: 'blog/blogs', isOpen, activePage });
});

app.get('/blog/:blogId', (req, res) => {
  const {blogId} = req.params
  const isOpen = false;
  const activePage = 'blog';
  res.render('Layout', { page: 'blog/blog', blogId, isOpen, activePage });
});

// Catch-all route for handling 404 errors
// app.get('/*', (req, res) => {
//   res.status(404).render('404');
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
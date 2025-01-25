const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const postRoutes = require('./routes/posts');
require('dotenv').config();

const app = express();
connectDB();

const corsOptions = {
  origin: `${process.env.CORS_ORIGIN}`,
  methods: ['GET', 'HEAD', 'PUT', 'OPTIONS', 'PATCH', 'POST', 'DELETE'],
}
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', postRoutes);  // API routes for blog posts

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

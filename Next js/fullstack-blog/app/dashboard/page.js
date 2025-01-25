'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DashboardPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    // Fetch existing posts for the admin dashboard
    fetchPosts();
  }, []);
  const fetchPosts = async () => {
    try {
      const data = await axios.get('http://localhost:8000/api/posts');
      if (data.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      console.log(data.data)
      setPosts(data.data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend to create a new post
      const response = await axios.post('http://localhost:8000/api/posts')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const createdPost = await response.json();
      // Update the posts state with the new post
      setPosts((prevPosts) => [...prevPosts, createdPost]);
      setNewPost({ title: '', content: '', author: '' }); // Reset form
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/posts/${postId}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Update the posts state to remove the deleted post
      setPosts((prevPosts) => prevPosts.filter(post => post._id !== postId));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Admin Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="content"
            value={newPost.content}
            onChange={handleChange}
            placeholder="Content"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            name="author"
            value={newPost.author}
            onChange={handleChange}
            placeholder="Author"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Posts</h2>
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post._id} className="border p-4">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p>{post.content.slice(0, 100)}...</p>
              <button
                onClick={() => handleDelete(post._id)}
                className="bg-red-500 text-white p-2 rounded-md">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
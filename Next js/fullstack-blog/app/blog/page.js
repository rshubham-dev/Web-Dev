'use client';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add error handling

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data } = await axios.get('http://localhost:8000/api/posts');
        setPosts(data);
        setError(null); // Clear any previous errors
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    }
    fetchPosts();
  }, []);

  // Conditional rendering for loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center my-4">{error}</div>;
  }

  // Render the list of posts
  return (
    <div>
      <Head>
        <title>Blog - Building Design Co.</title>
        <meta name="description" content="Explore our blog posts on architecture, design, and construction." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Blog - Building Design Co." />
        <meta property="og:description" content="Explore our blog posts on architecture, design, and construction." />
        <meta property="og:image" content="path-to-your-social-image.jpg" />
        <meta property="og:url" content="http://localhost:3000/blog" />
      </Head>
      <h1 className="text-3xl font-bold text-center my-4">Blog Posts</h1>
      {posts.length > 0 ? (
        <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 p-16">
          {posts.map((post) => (
            <li key={post._id} className="border p-4 row-span-1 h-full">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p>{post.content.slice(0, 100)}...</p>
              <Link href={`/blog/${post._id}`} className="text-blue-500">
                Read More
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center my-4">No posts available at the moment.</div>
      )}
    </div>
  );
}

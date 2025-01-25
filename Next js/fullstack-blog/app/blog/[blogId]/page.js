'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

export default function PostPage({params}) {
//   const router = useRouter();
  const { blogId } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state
console.log(blogId)
  useEffect(() => {
    fetchPost(blogId);
  }, [blogId]);
  console.log("blogId:", blogId)

  const fetchPost = async (id) => {
    setLoading(true); // Start loading
    try {
      const { data } = await axios.get(`http://localhost:8000/api/posts/${id}`);
      setPost(data);
      setError(null); // Clear previous errors
    } catch (error) {
      console.error('Fetch error:', error);
      setError('Post not found or fetch failed');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Conditional rendering for loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Blog - Building Design Co.</title>
        <meta name="description" content={post.content?.slice(0, 150)} />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content?.slice(0, 150)} />
        {/* <meta property ="og:image" content={post.imageUrl} /> */}
      </Head>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  );
}

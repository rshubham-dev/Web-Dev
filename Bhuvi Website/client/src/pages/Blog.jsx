import React from 'react'
import CTA from '../components/CTA'
import { useParams } from 'react-router-dom'

const Blog = () => {
  const {blogId} = useParams();
  console.log(blogId)
  return (
    <main className='main'>
      <div className="blog"></div>
    <CTA />
  </main>
  )
}

export default Blog
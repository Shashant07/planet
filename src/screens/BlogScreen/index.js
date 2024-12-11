import React from 'react'
import BlogTitle from '../../components/Blogs/BlogTitle';
import BlogsContainer from '../../components/Blogs/BlogsContainer';

const BlogScreen = () => {
  return (
    <main className="main">
        <BlogTitle />
        <BlogsContainer />
    </main>
  )
}

export default BlogScreen;
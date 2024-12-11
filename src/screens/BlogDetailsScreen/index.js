import React from 'react'
import BlogDetailsTitle from '../../components/BlogDetails/BlogDetailsTitle';
import BlogDetailsContainer from '../../components/BlogDetails/BlogDetailsContainer';

const BlogDetailsScreen = () => {
  return (
    <main className="main">
        <BlogDetailsTitle/>
        <BlogDetailsContainer />
    </main>
  )
}

export default BlogDetailsScreen;
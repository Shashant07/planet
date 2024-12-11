import React from 'react'
import BlogsSection from './BlogsSection';
import BlogsSidebar from './BlogsSidebar';

const BlogsContainer = () => {
  return (
    <div className="container">
        <div className="row">
            <BlogsSection />
            <BlogsSidebar />
        </div>
    </div>
  )
}

export default BlogsContainer;
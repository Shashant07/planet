import React from 'react';
import BlogDetailsSection from './BlogDetailsSection';
import BlogDetailsSidebar from './BlogDetailsSidebar';

const BlogDetailsContainer = () => {
  return (
    <div className="container">
        <div className="row">
            <BlogDetailsSection />
            <BlogDetailsSidebar />
        </div>
    </div>
  )
}

export default BlogDetailsContainer;
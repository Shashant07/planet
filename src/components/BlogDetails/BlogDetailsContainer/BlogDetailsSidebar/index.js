import React from 'react';
import { Link } from 'react-router-dom';


import blogRec1 from '../../../../images/blog/blog-recent-1.jpg';
import blogRec2 from '../../../../images/blog/blog-recent-2.jpg';
import blogRec3 from '../../../../images/blog/blog-recent-3.jpg';
import blogRec4 from '../../../../images/blog/blog-recent-4.jpg';
import blogRec5 from '../../../../images/blog/blog-recent-5.jpg';



const BlogDetailsSidebar = () => {
  return (
    <div className="col-lg-4 sidebar">

      <div className="widgets-container">

        <div className="search-widget widget-item">

          <h3 className="widget-title">Search</h3>
          <form action="">
            <input type="text" />
            <button type="submit" title="Search"><i className="bi bi-search"></i></button>
          </form>

        </div>
        <div className="categories-widget widget-item">

          <h3 className="widget-title">Categories</h3>
          <ul className="mt-3">
            <li><Link to="#">General <span>(25)</span></Link></li>
            <li><Link to="#">Lifestyle <span>(12)</span></Link></li>
            <li><Link to="#">Travel <span>(5)</span></Link></li>
            <li><Link to="#">Design <span>(22)</span></Link></li>
            <li><Link to="#">Creative <span>(8)</span></Link></li>
            <li><Link to="#">Educaion <span>(14)</span></Link></li>
          </ul>

        </div>
        <div className="recent-posts-widget widget-item">

          <h3 className="widget-title">Recent Posts</h3>

          <div className="post-item">
            <img src={blogRec1} alt="" className="flex-shrink-0" />
            <div>
              <h4><Link to="blog-details.html">Nihil blanditiis at in nihil autem</Link></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
          </div>

          <div className="post-item">
            <img src={blogRec2} alt="" className="flex-shrink-0" />
            <div>
              <h4><Link to="blog-details.html">Quidem autem et impedit</Link></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
          </div>

          <div className="post-item">
            <img src={blogRec3} alt="" className="flex-shrink-0" />
            <div>
              <h4><Link to="blog-details.html">Id quia et et ut maxime similique occaecati ut</Link></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
          </div>

          <div className="post-item">
            <img src={blogRec4} alt="" className="flex-shrink-0" />
            <div>
              <h4><Link to="blog-details.html">Laborum corporis quo dara net para</Link></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
          </div>

          <div className="post-item">
            <img src={blogRec5} alt="" className="flex-shrink-0" />
            <div>
              <h4><Link to="blog-details.html">Et dolores corrupti quae illo quod dolor</Link></h4>
              <time dateTime="2020-01-01">Jan 1, 2020</time>
            </div>
          </div>

        </div>


        <div className="tags-widget widget-item">

          <h3 className="widget-title">Tags</h3>
          <ul>
            <li><Link to="#">App</Link></li>
            <li><Link to="#">IT</Link></li>
            <li><Link to="#">Business</Link></li>
            <li><Link to="#">Mac</Link></li>
            <li><Link to="#">Design</Link></li>
            <li><Link to="#">Office</Link></li>
            <li><Link to="#">Creative</Link></li>
            <li><Link to="#">Studio</Link></li>
            <li><Link to="#">Smart</Link></li>
            <li><Link to="#">Tips</Link></li>
            <li><Link to="#">Marketing</Link></li>
          </ul>

        </div>

      </div>

    </div>
  )
}

export default BlogDetailsSidebar
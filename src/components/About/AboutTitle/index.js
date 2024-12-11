import React from 'react';
import { Link } from 'react-router-dom';

const AboutTitle = () => {
  return (
    <div className="page-title">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>About Us</h1>
              <p className="mb-0">Welcome to <strong>Planet1</strong>, where your digital journey begins. We are a dynamic team of tech enthusiasts, designers, and developers dedicated to helping businesses of all sizes build their online presence and grow in the digital world.</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="index.html">Home</Link></li>
            <li className="current">About Us</li>
          </ol>
        </div>
      </nav>
    </div>
  )
}

export default AboutTitle;
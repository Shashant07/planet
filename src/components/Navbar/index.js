import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import p1logo from '../../images/p1-logo.png';

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
    console.log("hello")
  }
  return (
    <header id="header" className={openSidebar ? 'header d-flex align-items-center sticky-top mobile-nav-active' : 'header d-flex align-items-center sticky-top'}>
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src={p1logo} alt="logo" />
            <h1 className="sitename">Planet1</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/" className="active">Home<br /></Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blog</Link></li>
            <li className="dropdown"><Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link to="#">D1</Link></li>
                <li className="dropdown"><Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                  <ul>
                    <li><Link to="#">Deep Dropdown 1</Link></li>
                    <li><Link to="#">Deep Dropdown 2</Link></li>
                  </ul>
                </li>
                <li><Link to="#">Dropdown 2</Link></li>
                <li><Link to="#">Dropdown 3</Link></li>
                <li><Link to="#">Dropdown 4</Link></li>
              </ul>
            </li>
            <li className="listing-dropdown"><Link to="#"><span>D2</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li>
                  <Link to="#">Column 1 link 1</Link>
                  <Link to="#">Column 1 link 2</Link>
                  <Link to="#">Column 1 link 3</Link>
                </li>
                <li>
                  <Link to="#">Column 2 link 1</Link>
                  <Link to="#">Column 2 link 2</Link>
                  <Link to="#">Column 3 link 3</Link>
                </li>
                <li>
                  <Link to="#">Column 3 link 1</Link>
                  <Link to="#">Column 3 link 2</Link>
                  <Link to="#">Column 3 link 3</Link>
                </li>
                <li>
                  <Link to="#">Column 4 link 1</Link>
                  <Link to="#">Column 4 link 2</Link>
                  <Link to="#">Column 4 link 3</Link>
                </li>
                <li>
                  <Link to="#">Column 5 link 1</Link>
                  <Link to="#">Column 5 link 2</Link>
                  <Link to="#">Column 5 link 3</Link>
                </li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Contact</Link></li>
          </ul>
          <i className={openSidebar ? 'mobile-nav-toggle d-xl-none bi bi-x' : 'mobile-nav-toggle d-xl-none bi bi-list'} onClick={handleToggleSidebar}></i>
        </nav>

        <Link className="btn-getstarted flex-md-shrink-0" to="index.html#about">Get Started</Link>

      </div>
    </header>
  )
}

export default Navbar;
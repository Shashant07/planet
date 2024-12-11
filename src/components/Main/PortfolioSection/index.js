import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AOS from 'aos';
import app1 from '../../../images/portfolio/app-1.jpg'

// import app2 from '../../../images/portfolio/app-2.jpg'
// import app3 from '../../../images/portfolio/app-3.jpg'

// import product1 from '../../../images/portfolio/product-1.jpg'
// import product2 from '../../../images/portfolio/product-2.jpg'
// import product3 from '../../../images/portfolio/product-3.jpg'

// import branding1 from '../../../images/portfolio/branding-1.jpg'
// import branding2 from '../../../images/portfolio/branding-2.jpg'
// import branding3 from '../../../images/portfolio/branding-3.jpg'

// import books1 from '../../../images/portfolio/books-1.jpg'
// import books2 from '../../../images/portfolio/books-2.jpg'
// import books3 from '../../../images/portfolio/books-3.jpg'

const PortfolioSection = () => {
    const categories = ["All", "Electronics", "Books", "Clothing"];

    const products = [
        { id: 1, name: "Smartphone", category: "Electronics" },
        { id: 2, name: "Laptop", category: "Electronics" },
        { id: 3, name: "Novel", category: "Clothing" },
        { id: 4, name: "T-Shirt", category: "Clothing" },
        { id: 5, name: "Jeans", category: "Clothing" },
        { id: 6, name: "Notebook", category: "Books" },
    ];

    const [activeCategory, setActiveCategory] = useState("All");

    // Filter products based on the active category
    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter((product) => product.category === activeCategory);

    const handleSetActiveCategory = (category) => {
        setActiveCategory(category);
        // aosInit()
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false
          });

    }
    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Portfolio</h2>
                <p>Check our latest work</p>
            </div>
            <div className="container">
                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        {categories.map((category) => (
                            <li data-filter="*" className="filter-active" key={category}
                                style={{
                                    padding: "0.5rem 1rem",
                                    margin: "0.5rem",
                                    backgroundColor: activeCategory === category ? "#007BFF" : "#f0f0f0",
                                    color: activeCategory === category ? "#fff" : "#000",
                                    border: "none",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleSetActiveCategory(category)}
                            >{category}</li>))}
                        {/* // <li data-filter=".filter-app">App</li>
                        // <li data-filter=".filter-product">Product</li>
                        // <li data-filter=".filter-branding">Branding</li>
                        // <li data-filter=".filter-books">Books</li> */}
                    </ul>
                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app" key={product.id} style={{ margin: "0.5rem 0" }}>
                                    <div className="portfolio-content h-100">
                                        <img src={app1} className="img-fluid" alt="" />
                                        <div className="portfolio-info">
                                            <h4>{product.name}</h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                            <Link to={app1} title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                            <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                        </div>
                                    </div>
                                </div>))
                        ) : (<div>No products found.</div>
                        )}
                        {/* <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <div className="portfolio-content h-100">
                                <img src={product1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Product 1</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={product1} title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <div className="portfolio-content h-100">
                                <img src={branding1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Branding 1</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={branding1} title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                            <div className="portfolio-content h-100">
                                <img src={books1} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Books 1</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={books1} title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <div className="portfolio-content h-100">
                                <img src={app2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={app2} title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <div className="portfolio-content h-100">
                                <img src={product2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Product 2</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={product2} title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <div className="portfolio-content h-100">
                                <img src={branding2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Branding 2</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={branding2} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                            <div className="portfolio-content h-100">
                                <img src={books2} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Books 2</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={books2} title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <div className="portfolio-content h-100">
                                <img src={app3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={app3} title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <div className="portfolio-content h-100">
                                <img src={product3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Product 3</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={product3} title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <div className="portfolio-content h-100">
                                <img src={branding3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Branding 3</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={branding3} title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                            <div className="portfolio-content h-100">
                                <img src={books3} className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Books 3</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur</p>
                                    <Link to={books3} title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></Link>
                                    <Link to="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>


    );
}

export default PortfolioSection;
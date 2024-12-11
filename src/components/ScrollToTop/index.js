import React from 'react';
import { Link } from 'react-router-dom';

const ScrollToTop = () => {
    return (
        <Link to="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
            <i className="bi bi-arrow-up-short"></i>
        </Link>
    )
}

export default ScrollToTop;
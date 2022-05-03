import React from 'react';
// import Container from 'react-bootstrap/Container';
import notFound from '../images/notFound.svg';

function NotFound() {
    return (

        <div className="not-found-page-image" >
            <img src={notFound} alt="not-found-page" />
            <h2 className="text-center text-danger">Page not found</h2>
        </div>

    )
}

export default NotFound
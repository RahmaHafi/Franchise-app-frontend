import React from 'react';
import Container from 'react-bootstrap/Container';
import notFound from '../images/notFound.svg';

function NotFound() {
    return (

        <Container>
            <img src={notFound} alt="not-found-page" className="not-found-page-image my-5" />
            <h1 className="text-center text-danger">Page not found</h1>
        </Container>

    )
}

export default NotFound
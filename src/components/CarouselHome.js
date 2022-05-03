import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
    return (
        <div >
            <Carousel >
                <Carousel.Item >
                    <img  height={538}
                        className="d-block w-100"
                        src="https://cdn.create.vista.com/api/media/small/279309988/stock-photo-the-concept-of-business-technology"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
                        <h3 className='caroucel-labes'>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img height={538}
                        className="d-block w-100 "
                        src="https://www.dynamique-mag.com/wp-content/uploads/1409-2.jpg"
                        alt="Second slide"
                    />

                    {/* <Carousel.Caption>
                        <h3 className='caroucel-labes'>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img height={538}
                        className="d-block w-100"
                        src="https://cdn.create.vista.com/api/media/small/141964012/stock-photo-business-technology-internet-and-marketing"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption>
                        <h3 className='caroucel-labes'>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselHome
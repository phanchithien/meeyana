'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function CarouselContent() {
    return (
        <Carousel className="pt-12">
            <Carousel.Item>
                <Image src="/background.jpg" className="h-96 w-full"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/background.jpg" className="h-96 w-full"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src="/background.jpg" className="h-96 w-full"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
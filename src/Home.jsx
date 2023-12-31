import React from 'react';
import {Carousel} from 'react-bootstrap'

function Home() {
  return (
    <div>
      <h1>    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://w0.peakpx.com/wallpaper/153/422/HD-wallpaper-sunset-anime-anime-sunset-clouds-colorful-magic-pink-purple-sky-sunsets.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/8/1/FqEYG7.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/sunset-with-tree-sky_188544-12095.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></h1>
    </div>
  )
}

export default Home
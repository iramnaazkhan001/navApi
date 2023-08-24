import React from 'react'
import{ Container,Row,Col,Button,Card,Carousel,}from 'react-bootstrap';
function About() {
  return (
    <div>
    <Container>
      <br />
      <Row>
        <Col sm> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51M0Yi3zmUL._AC_UY327_FMwebp_QL65_.jpg" />
      <Card.Body>
        <Card.Title>Dell Vostro 3510 Laptop</Card.Title>
        <Card.Text>
        Dell Vostro 3510 Laptop,Intel i5-1135G7/8GB/1TB+256GB SSD/15.6"(39.62cm)FHD,TÜV Rheinland Certified ComfortviewReduce Harmful Blue Light/Backlit KB + FPR/Windows 11+MSO'21/15 Month McAfee/Black/1.69kg

        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
</Col>
<br />
        <Col sm>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/716x1581IrL._AC_UY327_FMwebp_QL65_.jpg" />
      <Card.Body>
        <Card.Title>ASUS VivoBook 14 Laptop</Card.Title>
        <Card.Text>
        ASUS VivoBook 14, Intel Core i3-1115G4 11th Gen, 14" (35.56 cm) FHD, Thin and Light Laptop (8GB/512GB SSD/Office 2021/Windows 11 Home/Integrated Graphics/FP Reader/Silver/1.6 kg), X415EA-EK322WS

        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
</Col>
        <Col sm>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61FBPHH1rOL._AC_UY327_FMwebp_QL65_.jpg" />
      <Card.Body>
        <Card.Title>Dell Vostro 3420 Laptop</Card.Title>
        <Card.Text>
        Dell Vostro 3420 Laptop,12th Gen Core i3-1215U/8GB & 512GB SSD/14.0" (35.56cm)FHD,TÜV Rheinland Certified Comfortview Reduce Harmful Blue Light Emissions/Windows11+MSO'21/15 Month McAfee/Black/1.48kg
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
</Col>
      </Row>
      <br />
      <Row>
        <Col sm> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51+iKnnyQeL._AC_UY327_FMwebp_QL65_.jpg" />
      <Card.Body>
        <Card.Title>Microsoft New Surface pro</Card.Title>
        <Card.Text>
        Microsoft New Surface Pro9 13" Intel evo 12 Gen i5 / 8GB / 256GB Sapphire with Windows 11 Home, 365 Family 30-Day Trial & Xbox Game Pass Ultimate 30-Day Trial

        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
</Col>
<br />
        <Col sm>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51pEhVQaaDL._AC_UY327_FMwebp_QL65_.jpg" />
      <Card.Body>
        <Card.Title>Lenovo Ideapad </Card.Title>
        <Card.Text>
        Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen 15.6" (39.62cm) FHD Laptop (16GB/512GB SSD/Win 11/Office 2021/2 Years Warranty/Alexa Built-in/3 Month Game Pass/Arctic Grey/1.65Kg), 82H802XXIN
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
</Col>
        <Col sm>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51rEPuvNYFL._AC_UY327_FMwebp_QL65_.jpg" />
      <Card.Body>
        <Card.Title>Dell G15 5520 </Card.Title>
        <Card.Text>
        Dell G15 5520 Gaming Laptop, Intel i5-12500H,16GB DDR5,512GB SSD,NVIDIA RTX 3050 (4GB GDDR6),15.6"(39.62cm) FHD WVA AG 120Hz 250 nits, Backlit KB Orange, Win 11 + MSO'21,Dark Shadow Grey,2.81kg

        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
</Col>
      </Row>
    </Container>
    {/* ////// */}
    {/* ////////// */}
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/86117e9d-4079-4231-9854-21bbc04852d0._CR0,0,1200,628_SX507_QL70_.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Apple Series</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/943a48c6-a5f5-4a18-b67b-ee3e9715d7cf.__CR1,0,1464,600_PT0_SX1464_V1___.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Lenovo Series</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9d0f90e1-f8ee-47e8-8d13-e3142729d3d4._CR0,0,1200,628_SX507_QL70_.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dell Series</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default About
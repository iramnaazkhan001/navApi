import React from 'react'
import {Card,Col,Button,Row,Container} from 'react-bootstrap'
function View() {
  return (
    <div>  <Container>
    <Row>
      <Col sm>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://picsum.photos/id/1084/536/354?grayscale" />
          <Card.Body>
            <Card.Title>Atlantic walrus</Card.Title>
            <Card.Text>
              In Alantic walrus, males weigh around 1200 to 1500 kg and reach length of close to 3m.
            </Card.Text>
            <Button variant="primary">See More</Button>
          </Card.Body>
        </Card>
      </Col>

      <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/id/237/536/354" />
        <Card.Body>
          <Card.Title>Labrador Retriever</Card.Title>
          <Card.Text>
            The Labrador Retriever or simply Labrador, is a British breed of retriever gun dog.
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card></Col>
      <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://wallpaper-house.com/data/out/9/wallpaper2you_327176.jpg" height={200} />
        <Card.Body>
          <Card.Title>Siberian Tiger</Card.Title>
          <Card.Text>
            The Siberian tiger, or Amur tiger, is a population of the tiger subspecies.
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card></Col>
    </Row>
  </Container>
  {/* /////////////////////////////// */}
  <Container>
    <Row>
      <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cutewallpaper.org/27/blue-animal-wallpaper/1287817120.jpg" height={200} />
        <Card.Body>
          <Card.Title>Bengal Tiger</Card.Title>
          <Card.Text>
            The Bengal tiger is a population of the Panthera tigris tigris subspecies and the nominate tiger subspecies.
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card></Col>
      <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://s1.1zoom.me/big0/221/378714-sepik.jpg" height={200} />
        <Card.Body>
          <Card.Title>Ojos Azules</Card.Title>
          <Card.Text>
            Ojos Azules are a very rare breed.The first cat of that type was found in 1980.
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card></Col>
      <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.wallpaperup.com/uploads/wallpapers/2014/01/08/219350/2b6f5fa55dbda9d3093c9836ae3b7653-700.jpg" height={200} />
        <Card.Body>
          <Card.Title>Flamed horse</Card.Title>
          <Card.Text>
            The horse Equus ferus caballus is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family.
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card></Col>
    </Row>
  </Container>
  {/* ////////////////////////// */}
  <Container>
    <Row>
      <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cutewallpaper.org/25/animal-galaxy-wallpaper/1449230455.jpg" height={200} />
        <Card.Body>
          <Card.Title>Wolf</Card.Title>
          <Card.Text>
            The wolf is the largest extant member of the family Canidae, and is further distinguished from other Canis species
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card></Col>
      <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/438/271/605/reptiles-chameleon-abstract-artistic-wallpaper-preview.jpg" height={200} />
        <Card.Body>
          <Card.Title>Chameleons</Card.Title>
          <Card.Text>
            Chameleons or chamaeleons (family Chamaeleonidae) are a distinctive and highly specialized clade
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card></Col>
      <Col sm><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://images7.alphacoders.com/635/thumb-350-635014.jpg" height={200} />
        <Card.Body>
          <Card.Title>Falcon</Card.Title>
          <Card.Text>
            Falcons are small to medium-sized birds of prey related to hawks, eagles, and vultures. They usually have pointed wings and long tails
          </Card.Text>
          <Button variant="primary">See More</Button>
        </Card.Body>
      </Card></Col>
    </Row>
  </Container></div>
  )
}

export default View
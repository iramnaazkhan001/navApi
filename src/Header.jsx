import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand><Link to='/home' className='text-decoration-none text-dark'>tnpLab.in</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to='/home' className='text-decoration-none text-dark'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/about' className='text-decoration-none text-dark'>About</Link></Nav.Link>
              <Nav.Link><Link to='/contact' className='text-decoration-none text-dark'>Contact</Link></Nav.Link>
              <Nav.Link><Link to='/view' className='text-decoration-none text-dark'>View User</Link></Nav.Link>
              <Nav.Link><Link to='/fake-api' className='text-decoration-none text-dark'>Fake Api</Link></Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
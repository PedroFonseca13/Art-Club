import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'

const OffcanvasExample = () => {
  return (
    <>
      { ['sm'].map((expand) => (
        <Navbar key={ expand } bg="dark" variant="dark" expand={ expand }>
          <Container fluid>
            <Navbar.Brand href="/">ArtClub💈</Navbar.Brand>
            <Navbar.Toggle aria-controls={ `offcanvasNavbar-expand-${expand}` } />
            <Navbar.Offcanvas
              id={ `offcanvasNavbar-expand-${expand}` }
              aria-labelledby={ `offcanvasNavbarLabel-expand-${expand}` }
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={ `offcanvasNavbarLabel-expand-${expand}` }>
                  ArtClub💈
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/barbershop">A barbearia</Nav.Link>
                  <Nav.Link href="#action2">Login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )) }
    </>
  )
}

export default OffcanvasExample

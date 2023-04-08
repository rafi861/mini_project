import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {

    const nav1 = {
        marginBottom: '10px',
    }
    const nav2 ={
        position:'left 500px'
    }
    
  return (
    <>
    <Navbar bg="dark" variant="dark" style={nav1}>
        <Container >
          <Navbar.Brand href="#home" className='nav1' >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={nav2}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
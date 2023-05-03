import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbaar = () => {
  return (
    <div className='Container'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home" style={{
            color:' #e6e922'
        }}>Golden Wings</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/Pkg">Packeges</Nav.Link>
            <Nav.Link href="#">Policy</Nav.Link>

            

           
          </Nav>
          <Nav>
            <Nav.Link href="book" style={{ fontSize:"20px" }}>Book Now</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbaar
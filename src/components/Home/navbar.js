import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Navbars() {
  return (
    <>
      
      <br />
      <Navbar style={{backgroundColor: "#59b256"}}>
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/ProjectList">Project</Nav.Link>
            <Nav.Link as={Link} to="/Experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
     
    </>
  );
}

export default Navbars;
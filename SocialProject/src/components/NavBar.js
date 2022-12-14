import { Navbar, Nav, Container } from "react-bootstrap";
import SocialImage from '../assets/social-image.png'

function NavBarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
              <Navbar.Brand href="#home">
              <img
              src={SocialImage}
              width="30"
            height="30"
              className="d-inline-block align-top"
              alt="Photos logo"
                  />{" "}
                  Social App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Sign Up</Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;

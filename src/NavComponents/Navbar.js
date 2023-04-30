import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function AppNavbar() {

  

  return (
    
   
        <Navbar  expand="lg" fixed="top" className="navBackgroundColor">
            <Container fluid>
              <Navbar.Brand as={Link} to='/'><img
                    src="Assets/coffeeLogo.png"
                    width="70"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                  <Nav.Link as={Link} to='/Menu'>MENU</Nav.Link>
                  <Nav.Link as={Link} to='/Merchandise'>MERCHANDISE</Nav.Link>
                  <Nav.Link as={Link} to='/Rewards'>REWARDS</Nav.Link>
                </Nav>
                <Button className='navSigninButtonStyle'>Sign in</Button>
                <Button className='navJoinNowButtonStyle'>Join Now</Button>
              </Navbar.Collapse>
            </Container>
        </Navbar>
        
  );
}

export default AppNavbar;
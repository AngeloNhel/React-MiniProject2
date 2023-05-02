import { Link } from 'react-router-dom';
import './Navbar.css';
import './JoinNow.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function AppNavbar() {

  

  return (
    
      <div>
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
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '170px' }} navbarScroll >
                  <Nav.Link as={Link} to='/Menu'>MENU</Nav.Link>
                  <Nav.Link as={Link} to='/Merchandise'>MERCHANDISE</Nav.Link>
                  <Nav.Link as={Link} to='/Rewards'>REWARDS</Nav.Link>
                  <Nav.Link data-bs-toggle="modal" data-bs-target="#shoppingCartModal">SHOPPING CART</Nav.Link>
                </Nav>
                <Button className='navSigninButtonStyle' data-bs-toggle="modal" data-bs-target="#exampleModal">Sign in</Button>
                <Button className='navJoinNowButtonStyle'  as={Link} to='/JoinNow'>Join Now</Button>
              </Navbar.Collapse>
            </Container>
        </Navbar>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-body">
                    <div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title" style={{"textAlign" : "center"}}>Sign in</div>
                                <div>    
                                    <label>Email:  </label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div>
                                    <label>Password: </label>
                                    <input type="password" className="form-control"/>
                                </div>                
                                <div>
                                    <Nav.Link className='JoinLink' as={Link} to='/JoinNow'> <label>Already have an account? </label> Join now</Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary joinNowButton" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary joinNowButton" >Sign in</button>
                </div>
                </div>
            </div>
            </div>

            <div class="modal fade" id="shoppingCartModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-body">
                  <div>Shopping cart</div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary joinNowButton" data-bs-dismiss="modal">Close</button>
                   
                </div>
                </div>
            </div>
            </div>
      </div>
   
        
  );
}

export default AppNavbar;
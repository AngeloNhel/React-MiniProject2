import { Link } from 'react-router-dom';
import React from "react";
import Nav from 'react-bootstrap/Nav';
import './Footer.css';

function Footer () {

    return (
    
        

        

        <div className="backgroundColor">
        <hr/>
             <div className="container">
              <div className="row">
                <div className="col-sm">
                  <div id="aboutUs">About Us</div>
                  <Nav.Link className="linkItems" as={Link} to='/OurCompany'>Our Company</Nav.Link>
                  <Nav.Link className="linkItems" as={Link} to='/OurStoriesandNews'>Stories and News</Nav.Link>
                  <Nav.Link className="linkItems" as={Link} to='/CustomerService'>Customer Service</Nav.Link>
                  <Nav.Link className="linkItems" as={Link} to='/Careers'>Careers</Nav.Link>  
                </div>
                <div className="col-sm"> 
                  <div id="orderOnline">Order Online</div>
                  <Nav.Link className="linkItems" as={Link} to='/OrderontheApp'>Order on the App</Nav.Link>
                  <Nav.Link className="linkItems" as={Link} to='/Delivery'>Delivery</Nav.Link>
                  <Nav.Link className="linkItems" as={Link} to='/SendeGifts'>SendeGifts</Nav.Link>
                  <Nav.Link className="linkItems" as={Link} to='/GrabPartnership'>Grab Partnership</Nav.Link>
                </div>
                <div class="sb-logo-text d-md-inline-block d-none">Café la crème®</div>
              </div>
              <hr/>
              <div className="row">
                <div className="col-sm">
                  <div className="linkLogos"><img src="twitter.png" alt="Twitter Logo" href="#"/></div>
                  <div className="linkLogos"><img src="facebook.png" alt="Facebook Logo" href="#"/></div>
                  <div className="linkLogos"><img src="youtube.png" alt="Youtube Logo" href="#"/></div>
                  <div className="linkLogos"><img src="instagram.png" alt="Instagram Logo" href="#"/></div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm">
                <Nav.Link className="linkItems" as={Link} to='/PrivacyPolicy'>Privacy Policy</Nav.Link>
                </div>
                <div className="col-sm">
                <Nav.Link className="linkItems" as={Link} to='/termofUse'>term of Use</Nav.Link>
                </div>
                <div className="col-sm">
                <Nav.Link className="linkItems" as={Link} to='/SiteMap'>Site Map</Nav.Link>
                </div>
                <div className="col-sm-2">
                <Nav.Link className="linkItems" as={Link} to='/CookiesPreferences'>Cookies Preferences</Nav.Link>
                </div>
                <div className="col-sm-5">
                  <div className="linkItems">© 2023 Café la crème Coffee Company. All rights reserved.</div>
                </div>
              </div>
            </div>
        </div>    
        
    );
} export default Footer;

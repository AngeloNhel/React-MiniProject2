import { Link } from 'react-router-dom';
import React from "react";
import Button from 'react-bootstrap/Button';
import './Home.css';


function Home () {
      
    return (
        
         

           <div className="container-fluid">
            <div className="container">
           
                <div className="row align-items-center rowStyle"> 
                    <div className="col-md ">
                        <div className="padding">
                            <div><h1 className="h1">Cups of appreciation</h1></div>
                            <div className="paragraph">This Administrative Professionals’ Day, express your thanks with a well-deserved Café la crème Card.</div>
                            <div><Button className='btn eGiftButton'  as={Link} to='/Rewards'>Send e Gift</Button></div>
                        </div>                        
                    </div>
                    <div className="col-md secondColBackgroundColor">
                        <div><img src="/Assets/Section1.jpg" className="img-fluid" alt="Section one"/></div>
                    </div>
                </div>
            </div>   

            <div className="container">
                <div className="row align-items-center rowTwoStyle"> 
                    <div className="col-md ">
                        <div className="padding">
                            <div><h1 className="h1">Spring in your step, Rewards in your cup</h1></div>
                            <div className="paragraph">Shake up your usual and start earning Rewards —join today!</div>
                            <div><Button className='btn sectionTwoButton'  as={Link} to='/JoinNow'>Join Now</Button></div>
                        </div>                        
                    </div>
                    <div className="col-md">
                        <div><img src="/Assets/Section2.jpg" className="img-fluid" alt="Section one"/></div>
                    </div>
                </div>
            </div>  

            <div className="container">
                <div className="row align-items-center rowThreeStyle"> 
                    <div className="col-md ">
                        <div className="padding">
                            <div><h1 className="h1">Find your sunny side</h1></div>
                            <div className="paragraph">The Paradise Drink Café la crème Refreshers® beverage shines with pineapple and passionfruit flavors.</div>
                         
                            <div><Button className='btn sectionThreeButton'  as={Link} to='/Menu'>Order Now</Button></div>
                        </div>                        
                    </div>
                    <div className="col-md">
                        <div><img src="/Assets/Section3.jpg" className="img-fluid" alt="Section one"/></div>
                    </div>
                </div>
            </div>  

            <div className="container">
                <div className="row align-items-center rowFourStyle"> 
                    <div className="col-md ">
                        <div className="padding">
                            <div><h1 className="h1">Nitro your way</h1></div>
                            <div className="paragraph">Try the new Cinnamon Caramel Cream Nitro Cold Brew or go for the Vanilla Sweet Cream Nitro Cold Brew.</div>
                            <div><Button className='btn sectionFourButton'  as={Link} to='/Merchandise'>Order Now</Button></div>
                        </div>                        
                    </div>
                    <div className="col-md">
                        <div><img src="/Assets/Section4.jpg" className="img-fluid" alt="Section one"/></div>
                    </div>
                </div>
            </div>   

            <div className="container">
                <div className="row align-items-center rowFourStyle"> 
                    <div className="col-md ">
                        <div className="padding">
                            <div><h1 className="h1">Just-right choice</h1></div>
                            <div className="paragraph">Our Egg White & Roasted Red Pepper Egg Bites are tasty, protein rich and 170 calories.</div>
                            <div><Button className='btn sectionFourButton'  as={Link} to='/Menu'>Order Now</Button></div>
                        </div>                        
                    </div>
                    <div className="col-md">
                        <div><img src="/Assets/Section5.jpg" className="img-fluid" alt="Section one"/></div>
                    </div>
                </div>
            </div>   


           </div>
        
   
         

    );
}
export default Home;
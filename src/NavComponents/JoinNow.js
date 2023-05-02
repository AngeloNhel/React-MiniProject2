import React from "react";
import './JoinNow.css';
import Nav from 'react-bootstrap/Nav';

function JoinNow () {

    return (
            <>
            
             

               <div className="container joinNowCon">
                    <div className="row  joinNowRow align-items-center">
                        <div className="col-md text-center">
                            <div className="joinNowImageAndPlacehoder">
                                <img src="Assets/coffeeLogo.png"/>
                                <div className="joinNowPlaceholer">Welcome to the Café la crème®, May your coffee be strong and your Monday be short.</div>
                            </div>
                        </div>
                        <div className="col-md">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Create your account</div>
                                <div>
                                    <label>FirstName:  </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div>    
                                    <label>LastName:  </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div>    
                                    <label>Email:  </label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div>
                                    <label>Password: </label>
                                    <input type="password" className="form-control"/>
                                </div>                
                                <div>
                                    <label>Confirm Password:  </label>
                                    <input type="password" name="jobTitle" className="form-control"/>
                                </div>
                                <div className="text-center">
                                    <button className="btn joinNowButton">Create New</button>
                                </div>
                                <div>
                                <Nav.Link className='JoinLink' data-bs-toggle="modal" data-bs-target="#exampleModal"> <label>Already have an account? </label> Sign in</Nav.Link>
                                  
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
               </div>
            
            </>
    );
}
export default JoinNow;

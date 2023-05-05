import React, {useState } from "react";
import './JoinNow.css';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';

function JoinNow () {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const newUsers =  { firstName, lastName, email, password };
      try {
         await axios.post('http://localhost:9000/userslogin',newUsers);
        alert('Registration successful');
      } catch (error) {
        alert('Registration failed');
      }
    };

    return (
            <>
            
             

               <div className="container joinNowCon">
                    <div className="row  joinNowRow align-items-center">
                        <div className="col-md text-center">
                            <div className="joinNowImageAndPlacehoder">
                                <img src="Assets/coffeeLogo.png" alt="Logo"/>
                                <div className="joinNowPlaceholer">Welcome to the Café la crème®, May your coffee be strong and your Monday be short.</div>
                            </div>
                        </div>
                        <div className="col-md">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Create your account</div>
                                <form onSubmit={handleSubmit}>
                                <div>
                                    <label>FirstName:  </label>
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    value={firstName}
                                    onChange={(event) => setFirstName(event.target.value)}
                                    />
                                </div>
                                <div>    
                                    <label>LastName:  </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    value={lastName} 
                                    onChange={(event) => setLastName(event.target.value)}
                                    />
                                </div>
                                <div>    
                                    <label>Email:  </label>
                                    <input 
                                    type="email" 
                                    className="form-control"
                                    value={email} 
                                    onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <label>Password: </label>
                                    <input 
                                    type="password" 
                                    className="form-control"
                                    value={password} 
                                    onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>                
                                <div className="text-center">
                                    <button className="btn joinNowButton">Create New</button>
                                </div>
                                </form>
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

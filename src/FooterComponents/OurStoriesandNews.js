import React, {useState } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from 'axios';

function OurStoriesandNews () {


    const [email, setEmail] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const newUsers =  {email };
      try {
         await axios.post('http://localhost:9000/usersStayInTouch/JoinNow',newUsers);
        alert('Registration successful');
      } catch (error) {
        alert('Registration failed');
      }
    };


    return (
        <>
        <Container>
            <div className="row align-items-center">
                <div className="col">
                    <div><h1 className="text-center h1stories">Stories and News </h1></div>
                </div>
            </div>


            <div className="row align-items-center rowstories">
                <div className="col-md-6">
                    <div><img className="img-fluid" src="/Assets/Section1Stories.jpg" alt="section one stories"></img></div>
                </div>
                <div className="col-md-6">
                    <div><h2>A new mission for Café la crème</h2></div>
                    <div><p>Café la crème is evolving its mission statement centered on the idea of nurturing the limitless possibilities of human connection.</p></div>
                </div>
            </div>

            <div className="row">
            <div className="col-md-4 justify-content-center d-flex storiescard">
                <div className="card">
                <div><img className="img-fluid" src="/Assets/Section2StoriesCard.png" alt="section one stories"></img></div>
                    <div className="card-body">
                        <p className="card-text">Inside Café la crème: A look at how partners across U.S., Canada are connecting over coffee, embracing new mission </p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 justify-content-center d-flex storiescard">
                <div className="card">
                <div><img className="img-fluid" src="/Assets/Section1StoriesCard.png" alt="section one stories"></img></div>
                    <div className="card-body">
                        <p className="card-text">What’s inside a Greener Store?</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 justify-content-center d-flex storiescard">
                <div className="card">
                <div><img className="img-fluid" src="/Assets/Section3StoriesCard.png" alt="section one stories"></img></div>
                    <div className="card-body">
                        <p className="card-text">Café la crème and Brandon Blackwood team up to launch new limited-edition Sip & Sling bottle bag collection </p>
                    </div>
                </div>
            </div>
            </div>

            <div className="row">
            <div className="col-md-4 justify-content-center d-flex storiescard">
                <div className="card">
                <div><img className="img-fluid" src="/Assets/Section4StoriesCard.png" alt="section one stories"></img></div>
                    <div className="card-body">
                        <p className="card-text">The impact of Café la crème community investments: mobile clinic brings care to kids</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 justify-content-center d-flex storiescard">
                <div className="card">
                <div><img className="img-fluid" src="/Assets/Section5StoriesCard.png" alt="section one stories"></img></div>
                    <div className="card-body">
                        <p className="card-text">2022 Café la crème Global Environmental and Social Impact Report</p>
                    </div>
                </div>
            </div>

            <div className="col-md-4 justify-content-center d-flex storiescard">
                <div className="card">
                <div><img className="img-fluid" src="/Assets/Section6StoriesCard.png" alt="section one stories"></img></div>
                    <div className="card-body">
                        <p className="card-text">Café la crème is the exclusive coffee of the 2023 Met Gala</p>
                    </div>
                </div>
            </div>
            </div>

            <div className="col justify-content-center d-flex storiescard">
                <div className="card submitCard">
                <div><img className="img-fluid" src="/Assets/Section7StoriesCard.png" alt="section one stories" width={100}></img></div>
                    <div className="card-body">
                        <div className="card-title text-center">
                            Stay in touch
                        </div>
                        <p className="card-text text-center">Subscribe to get Starbucks stories and news delivered to your inbox.</p>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-9 getintouchinput">
                                        <input 
                                        type="email" 
                                        className="form-control"
                                        placeholder="Email:"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        />
                                </div>   
                                <div className="col-md-1  getintouchbtn">
                                    <button  class="btn" >submit</button>            
                                </div>  
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        </Container>
        </>
    );
}
export default OurStoriesandNews;
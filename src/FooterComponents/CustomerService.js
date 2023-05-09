import React, {useState } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from 'axios';

function CustomerService () {


    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const newUsers =  {email, feedback};
      try {
         await axios.post('http://localhost:9000/feedback/JoinNow',newUsers);
        alert('Message sent successfully');
      } catch (error) {
        alert('Message failed');
      }
    };


    return (
        <>
        <Container>
            <div className="row">
                <div className="col-12 customersServiceRow">
                        <div className="customersServiceH2">Customer Service</div>
                        <div className="customersServiceP">How can we help you?</div>
                        <div><button className="customersServiceButton" data-bs-toggle="modal" data-bs-target="#exampleModal">Send a message</button></div>
                </div>
                
                <div className="col-12 customersServiceCol">
                    <div>Share your thoughts! We welcome all questions, comments and feedback – it helps us make your experience at Café la crème the best it can be. Please select the category below that best fits your comment or question, then e-mail us. We’ll respond as quickly as possible.</div>
                </div>

                <div className="col-12 customersServiceCol">
                    <div className="customerServiceBold">Our products and stores</div>
                    <div>Please e-mail <span className="customerServiceBold">customer@rustancoffee.ph</span> if you have something to ask or say about your experiences with our beverages, merchandise or retail stores.</div>
                </div>

                <div className="col-12 customersServiceCol">
                    <div className="customerServiceBold">Our company</div>
                    <div>If you would like to find out more about Café la crème as a company, including our corporate social responsibility efforts or investor relations, please e-mail <span className="customerServiceBold">marketing@rustancoffee.ph</span>.</div>
                </div>

                <div className="col-12 customersServiceCol">
                    <div className="customerServiceBold">Our website</div>
                    <div>If you have a technical issue to report or question regarding this web site, then by all means e-mail<span className="customerServiceBold"> marketing@rustancoffee.ph.</span>.</div>
                </div>

                <div className="col-12 customersServiceCol">
                    <div className="customerServiceBold">Our careers</div>
                    <div>If you would like to be part of the Café la crème Philippines team<span className="customerServiceBold"> click on Careers.</span>.</div>
                </div>

                <div className="col-12 customersServiceCol">
                    <div className="customerServiceBold">Café la crème Rewards Customer Care</div>
                    <div>If you would like to contact Café la crème by postal mail, phone or e-mail, please direct your questions and comments to:</div>
                </div>

                <div className="col-12 customersServiceCol">
                    <div className="customerServiceBold">Café la crème Customer Relations</div>
                    <div>Rustan Coffee Building, 14 Jupiter St. cor. Asteroid St.,
                    <br/> Bel-Air 1, Makati City, Philippines 1209
                    <br/>Tel: +632-8462-6262 (Metro Manila), 1-800-10-4626262 (domestic toll-fee via PLDT)
                    <br/>Monday to Friday, 9AM - 9PM
                    <br/>Saturday, 10AM - 8PM
                    <br/><span  className="customerServiceBold">E-mail: card@Café la crème.ph</span></div>
                </div>
            </div>

            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <form onSubmit={handleSubmit}>
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Send a message</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input 
                        type="text" class="form-control" 
                        aria-label="Sizing example input" 
                        aria-describedby="inputGroup-sizing-default"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                    </div>
                    <div class="form-floating">
                        <textarea 
                        class="form-control CustomersServiceTextarea" 
                        placeholder="Leave a comment here" 
                        id="floatingTextarea2"
                        value={feedback}
                        onChange={(event) => setFeedback(event.target.value)}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" className="customersServiceButton">Submit</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        

        </Container>
        </>
    );
}
export default CustomerService;
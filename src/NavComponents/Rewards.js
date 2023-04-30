import React from "react";
import './Rewards.css';

function Rewards () {

    return (
        <>
        <div className="container">
            <div className="row rowStyle">
                <div className="textStyle">CAFÉ LA CRÈME® REWARDS</div>
            </div>
        </div>

        <div className="container">
            <div className="row align-items-center rowTwooStyle"> 
                <div className="col ">
                    <div className="padding">
                        <div><h1 className="h1">FREE COFFEE <br/> IS A TAP AWAY</h1></div>
                        <div className="paragraph">Join now to start earning Rewards.</div>
                        <div><button className="btn">Join now</button></div>
                    </div>                
                </div>
            </div>
        </div>   

            <div className="container thirdSectionCon">
                <div className="row align-items-center text-center">
                    <div className="col thirdSectionCol">
                        <div className="FirstHeader">Getting started is easy</div>
                        <div>Earn Stars and get rewarded in a few easy steps.</div>
                    </div>
                </div>
                <div className="row align-items-center text-center">
                    <div className="col-md thirdSectionCol">
                        <div><img src="/Assets/one.jpg" width="50" className="img-fluid"  alt="First Step"/></div>
                        <div className="SecondHeaders">Create an account</div>
                        <div>To get started, join now. You can also join in the app to get access to the full range of Café la crème® Rewards benefits.</div>
                    </div>
                    <div className="col-md thirdSectionCol">
                        <div><img src="/Assets/two.jpg" width="50" className="img-fluid"  alt="Second Step"/></div>
                        <div className="SecondHeaders">Order and pay how you’d like</div>
                        <div>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.</div>
                    </div>
                    <div className="col-md thirdSectionCol">
                        <div><img src="/Assets/three.jpg" width="50" className="img-fluid"  alt="Third Step"/></div>
                        <div className="SecondHeaders">Earn Stars, get Rewards</div>
                        <div>As you earn Stars, you can redeem them for Rewards like free food, drinks, and more. Start redeeming with as little as 25 Stars!</div>
                    </div>
                </div>
            </div>   

            
            <div className="container">
                <div className="row align-items-center rowTwooStyle"> 
                    <div className="col-md-6">
                        <div className="padding">
                            <div><h1 className="h1">Customize your drink</h1></div>
                            <div className="paragraph">Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</div>
                        </div>                
                    </div>
                    <div className="col-md-6">
                        <div><img src="/Assets/Section6.jpg"  className="img-fluid"  alt="Cup of Coffee"/></div>
                    </div>
                </div>
            </div>   

            <div className="container fourthSectionCon">
                <div className="row align-items-center text-center">
                    <div className="col thirdSectionCol">
                        <div className="FirstHeader">Endless Extras</div>
                        <div>Joining Café la crème® Rewards means unlocking access to exclusive benefits. <br/> Say hello to easy ordering, tasty Rewards and yes, free coffee.</div>
                    </div>
                </div>
                <div className="row align-items-center text-center">
                    <div className="col-md thirdSectionCol">
                        <div><img src="/Assets/Logo1.jpg" width="90" className="img-fluid"  alt="First Step"/></div>
                        <div className="SecondHeaders">Fun freebies</div>
                        <div>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</div>
                    </div>
                    <div className="col-md thirdSectionCol">
                        <div><img src="/Assets/Logo2.jpg" width="90" className="img-fluid"  alt="Second Step"/></div>
                        <div className="SecondHeaders">Order & pay ahead</div>
                        <div>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</div>
                    </div>
                    <div className="col-md thirdSectionCol">
                        <div><img src="/Assets/Logo3.jpg" width="90" className="img-fluid"  alt="Third Step"/></div>
                        <div className="SecondHeaders">Get to free faster</div>
                        <div>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</div>
                    </div>
                </div>
            </div>   

            <div className="container fourthSectionCon">
                <div className="row align-items-center text-center fifthSectionCon">
                    <div className="col thirdSectionCol">
                        <div className="FirstHeader">Cash or card, you earn Stars</div>
                        <div>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</div>
                    </div>
                </div>
                <div className="row align-items-center text-center fifthSectionCon">
                    <div className="col-md-4 thirdSectionCol">
                        <div className="SecondHeaders">1★Star per dollar</div>
                        <div>Pay as you go</div>
                    </div>
                    <div className="col-md-4 thirdSectionCol">
                        <div><img src="/Assets/credit-card.png" width="90" className="img-fluid"  alt="Second Step"/></div>
                        <div className="SecondHeaders">Scan and pay separately</div>
                        <div>Use cash or credit/debit card at the register.</div>
                    </div>
                    <div className="col-md-4 thirdSectionCol">
                        <div><img src="/Assets/cashless-payment.png" width="90" className="img-fluid"  alt="Third Step"/></div>
                        <div className="SecondHeaders">Save payment in the app</div>
                        <div>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</div>
                    </div>
                    <div className="col-md-4 thirdSectionCol">
                        <div className="SecondHeaders">2★Stars per dollar</div>
                        <div>Add funds in the app</div>
                    </div>
                    <div className="col-md-4 thirdSectionCol">
                        <div><img src="/Assets/atm-card.png" width="90" className="img-fluid"  alt="Second Step"/></div>
                        <div className="SecondHeaders">Preload</div>
                        <div>Register your gift card</div>
                    </div>
                    <div className="col-md-4 thirdSectionCol">
                        <div><img src="/Assets/gift-card.png" width="90" className="img-fluid"  alt="Third Step"/></div>
                        <div className="SecondHeaders">Get to free faster</div>
                        <div>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</div>
                    </div>
                </div>   
        </div>

        </>
    );
}
export default Rewards;
import Container from "react-bootstrap/esm/Container";

function OurCompany () {

    return (
        <>
        <Container>
            <h1 className="h1OurCompany">Our Company </h1>
            
            <div className="row align-items-top"> 
                <div className="col-md-6">
                    <div><img className="img-fluid" src="/Assets/Section1OurCompany.jpg" alt="Section Coffee & Craft"></img></div>
                </div>
                <div className="col-md-6">
                    <div><h2>Coffee & Craft</h2></div>
                    <div><p>It takes many hands to craft the perfect cup of coffee – from the farmers who tend to the red-ripe coffee cherries, 
                        to the master roasters who coax the best from every bean, and to the barista who serves it with care.
                        We are committed to the highest standards of quality and service,
                        embracing our heritage while innovating to create new experiences to savor.</p></div>
                </div>
            </div>

            <div className="row align-items-top"> 
                <div className="col-md-6">
                    <div><img className="img-fluid" src="/Assets/Section2OurCompany.jpg" alt="Section Coffee & Craft"></img></div>
                </div>
                <div className="col-md-6">
                    <div><h2>Our Partners</h2></div>
                    <div><p>We like to say that we are not in the coffee business serving people,
                            but in the people business serving coffee. Our employees – who we call partners – are at the heart of the Starbucks experience.
                            We are committed to making our partners proud and investing in their health,
                            well-being and success and to creating a culture of belonging where everyone is welcome.</p></div>
                </div>
            </div>


            <div className="row align-items-top"> 
                <div className="col-md-6">
                    <div><img className="img-fluid" src="/Assets/Section3OurCompany.jpg" alt="Section Coffee & Craft"></img></div>
                </div>
                <div className="col-md-6">
                    <div><h2>We Believe in the Pursuit of Doing Good</h2></div>
                    <div><p>As it has been from the beginning, our purpose goes far beyond profit. 
                        We believe Starbucks can, and should, have a positive impact on the communities we serve.</p></div>
                </div>
            </div>
            
                
             
        </Container>
        </>
    );
}
export default OurCompany;
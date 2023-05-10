import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';

function Merchandise () {


    const [proList, setProList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/merch')
          .then((response) => response.json())
          .then((data) => setProList(data))
          .catch((error) => console.log(error));
      }, []);


    return (
        <>
             <div className="container mt-5">
                <h2 className='text-center menuSectionTitle'>Merchandise</h2>
                <hr/>                
                <div className="row">
                    {proList.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Card>
                        <Card.Img variant="top" src={product.Image} />
                        <Card.Body>
                            <Card.Text> ₱ {product.Price}</Card.Text>
                            <Button variant="">Add to Cart</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
                </div>
        </>
    );
}
export default Merchandise;
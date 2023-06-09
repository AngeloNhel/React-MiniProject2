import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';

function Menu () {
    
    const [productList, setProductList] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const [athomecoffeeList, setAthomecoffeeList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/products/productlist')
          .then((response) => response.json())
          .then((data) => setProductList(data))
          .catch((error) => console.log(error));
      }, []);

      useEffect(() => {
        fetch('http://localhost:9000/foods/foodslist')
          .then((response) => response.json())
          .then((data) => setFoodList(data))
          .catch((error) => console.log(error));
      }, []);

      useEffect(() => {
        fetch('http://localhost:9000/athomecoffee/athomecoffeelist')
          .then((response) => response.json())
          .then((data) => setAthomecoffeeList(data))
          .catch((error) => console.log(error));
      }, []);

    return (
        <>
                    

                <div className="container mt-5">
                <h2 className='text-center menuSectionTitle'>Drinks</h2>
                <hr/>                
                <div className="row">
                    {productList.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Card>
                        <Card.Img variant="top" src={product.Image} />
                        <Card.Body>
                            <Card.Title className='menuTextSize'>{product.ProductName}</Card.Title>
                            <Card.Text> ₱ {product.Price}</Card.Text>
                            <Button variant="">Add to Cart</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
                </div>


                <div className="container mt-5">
                <h2 className='text-center menuSectionTitle'>Food</h2>
                <hr/>
                <div className="row">
                    {foodList.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Card>
                        <Card.Img variant="top" src={product.Image} />
                        <Card.Body>
                            <Card.Title className='menuTextSize'>{product.ProductName}</Card.Title>
                            <Card.Text> ₱ {product.Price}</Card.Text>
                            <Button variant="">Add to Cart</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
                </div>



                <div className="container mt-5">
                <h2 className='text-center menuSectionTitle'>At Home Coffee</h2>
                <hr/>
                <div className="row">
                    {athomecoffeeList.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Card>
                        <Card.Img variant="top" src={product.Image} />
                        <Card.Body>
                            <Card.Title className='menuTextSize'>{product.ProductName}</Card.Title>
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
export default Menu;
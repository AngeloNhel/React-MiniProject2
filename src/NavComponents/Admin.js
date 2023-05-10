import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';

function Admin () {

    const [productList, setProductList] = useState([]);
    const [foodList, setFoodList] = useState([]);
    const [athomecoffeeList, setAthomecoffeeList] = useState([]);
    const [proList, setProList] = useState([]);

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

        useEffect(() => {
            fetch('http://localhost:9000/merch')
            .then((response) => response.json())
            .then((data) => setProList(data))
            .catch((error) => console.log(error));
      }, []);

    return (
        <>
           
           <div className="container mt-5">
                <h2 className='text-center menuSectionTitle'>Drinks</h2>
                <Button variant="">Add Product</Button>
                <hr/>                
                <div className="row">
                    {productList.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Card>
                        <Card.Img variant="top" src={product.Image} alt={product.ProductName}/>
                        <Card.Body>
                            <Card.Title className='menuTextSize'>{product.ProductName}</Card.Title>
                            <Card.Text> ₱ {product.Price}</Card.Text>
                            <Button className='adminButtons' variant="">Edit</Button>
                            <Button className='adminButtons' variant="">Delete</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
                </div>


                <div className="container mt-5">
                <h2 className='text-center menuSectionTitle'>Food</h2>
                <Button variant="">Add Product</Button>
                <hr/>
                <div className="row">
                    {foodList.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Card>
                        <Card.Img variant="top" src={product.Image} alt={product.ProductName}/>
                        <Card.Body>
                            <Card.Title className='menuTextSize'>{product.ProductName}</Card.Title>
                            <Card.Text> ₱ {product.Price}</Card.Text>
                            <Button className='adminButtons' variant="">Edit</Button>
                            <Button className='adminButtons' variant="">Delete</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
                </div>



                <div className="container mt-5">
                <h2 className='text-center menuSectionTitle'>At Home Coffee</h2>
                <Button variant="">Add Product</Button>
                <hr/>
                <div className="row">
                    {athomecoffeeList.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Card>
                        <Card.Img variant="top" src={product.Image} alt={product.ProductName} />
                        <Card.Body>
                            <Card.Title className='menuTextSize'>{product.ProductName}</Card.Title>
                            <Card.Text> ₱ {product.Price}</Card.Text>
                            <Button className='adminButtons' variant="">Edit</Button>
                            <Button className='adminButtons' variant="">Delete</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
                </div>

                <div className="container mt-5">
                <h2 className='text-center menuSectionTitle'>Merchandise</h2>
                <Button variant="">Add Product</Button>
                <hr/>                
                <div className="row">
                    {proList.map((product, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <Card>
                        <Card.Img variant="top" src={product.Image} />
                        <Card.Body>
                            <Card.Text> ₱ {product.Price}</Card.Text>
                            <Button className='adminButtons' variant="">Edit</Button>
                            <Button className='adminButtons' variant="">Delete</Button>
                        </Card.Body>
                        </Card>
                    </div>
                    ))}
                </div>
                </div>

        </>
    );
}
export default Admin;
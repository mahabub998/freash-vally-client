import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const CheckOut = ({ event }) => {
    const [products, setProducts] = useState([])
    console.log(products)
    const { productId } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/event/' + productId)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [productId])

    const handelClick = () => {

        axios.post('http://localhost:5000/addOrder',)
            .then(response => {
                response.data && swal("Order placed successfully", "Your order placed successfully!", "success");
            })
            .catch(error => console.log(error));
    }

    return (

        <div>
            {/* this is : {productId}
            <h1>{products.length}</h1>
            <h5>{products.name}</h5>
            <h5>{products.price}</h5>
            <button onClick={handelClick}>CheckOut</button> */}
            <Card style={{ width: '25rem', height: '5rem' }}>
                <Card.Img style={{ width: '100px', height: '100px' }} variant="top" src={products.imageUrl} />
                <Card.Body>
                    <Card.Title>{products.name}</Card.Title>
                    <p>price : {products.price}</p>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary" onClick={handelClick}>CheckOut</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default CheckOut;
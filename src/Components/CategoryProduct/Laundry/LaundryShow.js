import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function LaundryShow(props) {
    const {name,_id,imageUrl,price,category} = props.fruit
    return (
        <div className="col-md-4  mt-5  col-sm-6 ">
        <Card style={{ width: "16rem" }}>
          <Card.Img className="home-img" variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
            <div className="row">
              <div className="col-md-6">
                <h4> $ {price}</h4>
              </div>
              <div className="col-md-6">
                <Link to={`/CheckOut/` + _id}>
                  <Button variant="primary">Details</Button>
                </Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
}

export default LaundryShow;

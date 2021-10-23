import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = ({ event }) => {

  const deleteEvent = () => {
    console.log("deleted");
  };
  
  return (
    <div className="col-md-4  mt-5  col-sm-6 ">
      <Card style={{ width: "16rem" }}>
        <Card.Img className="home-img" variant="top" src={event.imageUrl} />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
          <div className="row">
            <div className="col-md-6">
              <h4> $ {event.price}</h4>
            </div>
            <div className="col-md-6">
              <Link to={`/CheckOut/` + event._id}>
                <Button variant="primary">Details</Button>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Events;

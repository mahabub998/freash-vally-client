import React, { useState, useEffect } from "react";
import Events from "../Events/Events";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="row ms-5 justify-content-around">
      {events.map((event) => (
        <Events event={event}></Events>
      ))}
    </div>
  );
};

export default Home;

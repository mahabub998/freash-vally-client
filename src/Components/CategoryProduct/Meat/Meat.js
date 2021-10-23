import React from 'react'
import { useState,useEffect } from 'react';
import MeatShow from './MeatShow';

function Meat() {
    const [meat, setMeat] = useState([]);

    useEffect(() => {
      fetch("https://polar-savannah-87812.herokuapp.com/events")
        .then((response) => response.json())
        .then((data) => setMeat(data));
    }, []);
    const filteredData = meat.filter((data) => data.category === "Meat");
    return (
        <div className="row ms-5 justify-content-around">
        {filteredData.map((meat) => (
            <MeatShow meat={meat}></MeatShow>
          ))}
        </div>
    )
}

export default Meat

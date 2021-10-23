import React from "react";
import { useState, useEffect } from "react";
import LaundryShow from "./LaundryShow";

function Laundry() {
  const [fruit, setFruits] = useState([]);

  useEffect(() => {
    fetch("https://polar-savannah-87812.herokuapp.com/events")
      .then((response) => response.json())
      .then((data) => setFruits(data));
  }, []);
  // console.log(fruit)
  const filteredData = fruit.filter((data) => data.category === "Laundry");
  console.log(filteredData);

  return (
    <div className="">
      
      <div className="">
        <div className="row ms-5 justify-content-around">
          {filteredData.map((fruit) => (
            <LaundryShow fruit={fruit}></LaundryShow>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Laundry;

import React from "react";
import { useState, useEffect } from "react";
import NavLinks from "./../../Home/NavLinks";
import FruitShow from "./FruitShow";

function Fruit() {
  const [fruit, setFruit] = useState([]);

  useEffect(() => {
    fetch("https://polar-savannah-87812.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setFruit(data));
  }, []);

  console.log(fruit);

  const filteredFruitFoods = fruit.filter((data) => data.category === "foods");
  console.log(filteredFruitFoods);
  // const filteredData = fruit.filter((data) => data.category === "Laundry");
  return (
    <div className="container">
      <div>
        <div className="row ms-5 justify-content-around">
          {filteredFruitFoods.map((fruit) => (
            <FruitShow fruit={fruit}></FruitShow>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fruit;

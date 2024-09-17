import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Pizza is an amazingly popular food around the world consisting typically of a flattened bread dough spread with a savory mix of ingredients including tomato sauce and cheese, along with other toppings. Pizza is a very festive dish that is best shared amongst loved ones. It is perfect for every occasions, be in the business lunch delivery, the kids birthday celebration in the restaurant or the perfect date night spot. Kemsol Pizza is one of the leading pizza restaurant in Nigeria.
        </p>
      </div>
    </div>
  );
}

export default About;

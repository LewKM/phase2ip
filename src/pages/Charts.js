import React from "react";
import "./Charts.css";

const Charts = ({ chartdetails }) => {
  return (
    <div className="recipe">
      <h3>{chartdetails.name}</h3>
      <img src={chartdetails.image} alt={chartdetails.name} />
      <div className="description">
        <p>{chartdetails.ingredients}</p>
        <p>{chartdetails.directions}</p>
      </div>
    </div>
  );
};

export default Charts;
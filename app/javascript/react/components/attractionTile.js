import React from "react";
import { Link } from "react-router";

const AttractionTile = props => {
  return (
    <div>
      <h1 id="attraction-name">{props.name}</h1>
      <p id="attraction-description">{props.description}</p>
      <p id="attraction-address">{props.address}</p>
      <p id="attraction-city-state-zip">
        {props.city}, {props.state} {props.zip}
      </p>
    </div>
  );
};

export default AttractionTile;

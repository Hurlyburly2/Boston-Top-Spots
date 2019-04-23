import React from "react";
import { Link } from "react-router";

const AttractionTile = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.address}</p>
      <p>
        {props.city}, {props.state} {props.zip}
      </p>
    </div>
  );
};

export default AttractionTile;

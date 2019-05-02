import React from "react";
import { Link } from "react-router";

const AttractionTile = props => {
  let deleteButton;
  if (props.currentUser !== null && props.currentUser.role === "admin") {
    deleteButton = (
      <button
        id="deleteAttractionButton"
        onClick={props.handleDeleteAttraction}
        className="attraction-delete-button"
      >
        Delete Attraction
      </button>
    );
  }

  let image;
  if (props.image && props.image.includes("http")) {
    image = props.image;
  } else {
    image = `/${props.image}`;
  }
  return (
    <div>
      <div>
        <div id="attraction-image-square">
          <img
            src={image}
            className="attraction-image"
            id="attraction-main-image"
          />
        </div>
        <div className="attraction-details">
          <div className="attraction-details-alignment">
            <h1 id="attraction-name">{props.name}</h1>
            <p id="attraction-address">{props.address}</p>
            <p id="attraction-city-state-zip">
              {props.city}, {props.state} {props.zip}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p id="attraction-description">{props.description}</p>
        <div className="delbuttoncont">{deleteButton}</div>
      </div>
    </div>
  );
};

export default AttractionTile;

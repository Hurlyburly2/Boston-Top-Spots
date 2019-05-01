import React from "react";

const MyReviewTile = props => {
  let deleteButton;
  let deleteButtonId = `deleteButton${props.id}`;
  deleteButton = (
    <button id={deleteButtonId} onClick={props.handleDeleteReview}>
      Delete
    </button>
  );

  return (
    <div className="reviewSituation">
      <li className="review-tile-li">
        <div className="review-tile-image">
          <img src={props.attraction_image} />
          {props.attraction_name}
        </div>
        <div className="review-content">
          <div id="review-text">
            {props.body}
            <br />
            {props.rating}
          </div>
          <div className="review-index-buttons">
            <button id="edit">Edit</button>
            {deleteButton}
          </div>
        </div>
      </li>
    </div>
  );
};

export default MyReviewTile;

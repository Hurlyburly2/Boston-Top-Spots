import React from "react";

const MyReviewTile = props => {
  // let deleteButton;
  // let buttonId = `deleteButton${props.id}`;
  // if (props.currentUser !== null && props.currentUser.role === "admin") {
  //   deleteButton = (
  //     <button id={buttonId} onClick={props.handleDeleteReview}>
  //       Delete Review
  //     </button>
  //   );
  // }

  return (
    <li className="review-tile-li">
      <div className="review-tile-image">
        <img src={props.attraction_image} />
        {props.attraction_name}
      </div>
      <div className="review-text">
        {props.body}
        <br />
        {props.rating}
      </div>
      <div className="review-index-buttons">
        <button id="edit">Edit</button>
        <button id="delete">Delete</button>
      </div>
    </li>
  );
};

export default MyReviewTile;

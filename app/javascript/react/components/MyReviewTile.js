import React from "react";

const MyReviewTile = props => {
  let deleteButton;
  let deleteButtonId = `deleteButton${props.id}`;
<<<<<<< HEAD
  let editButton;
  let editButtonId = `editButton${props.id}`;
=======
>>>>>>> master
  deleteButton = (
    <button id={deleteButtonId} onClick={props.handleDeleteReview}>
      Delete
    </button>
  );
<<<<<<< HEAD
  editButton = (
    <button id={editButtonId} onClick={props.handleEditReview}>
      Edit
    </button>
  );
=======
>>>>>>> master

  return (
    <div className="reviewSituation">
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
<<<<<<< HEAD
          {editButton}
=======
          <button id="edit">Edit</button>
>>>>>>> master
          {deleteButton}
        </div>
      </li>
    </div>
  );
};

export default MyReviewTile;

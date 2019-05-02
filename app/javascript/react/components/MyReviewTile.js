import React from "react";

const MyReviewTile = props => {
  let deleteButton;
  let deleteButtonId = `deleteButton${props.id}`;
  let editButton;
  let editButtonId = `editButton${props.id}`;

  let rating;
  if (props.rating === 1) {
    rating = (
      <div className="doggo">
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
      </div>
    );
  } else if (props.rating === 2) {
    rating = (
      <div className="doggo">
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
      </div>
    );
  } else if (props.rating === 3) {
    rating = (
      <div className="doggo">
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
      </div>
    );
  } else if (props.rating === 4) {
    rating = (
      <div className="doggo">
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoGrey.png" alt="doggoGrey" />
      </div>
    );
  } else if (props.rating === 5) {
    rating = (
      <div className="doggo">
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
        <img src="/doggoBlack.png" alt="doggoBlack" />
      </div>
    );
  }
  return (
    <div className="reviewSituation">
      <li className="review-tile-li">
        <div className="review-tile-image">
          <img src={props.attraction_image} />
          <div className="review-index-tile-title">
            {props.attraction_name}
          </div>
        </div>
        <div className="review-content">
          <div id="review-text">
            {props.body}
            <br />
            {rating}
          </div>
          <div className="review-index-buttons">
            <button id={editButtonId} onClick={props.handleEditReview}>
              Edit
            </button>
            <button id={deleteButtonId} onClick={props.handleDeleteReview}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};
export default MyReviewTile;

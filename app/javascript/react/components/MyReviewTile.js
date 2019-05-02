import React from "react";

const MyReviewTile = props => {
  let deleteButton;
  let deleteButtonId = `deleteButton${props.id}`;
  let editButton;
  let editButtonId = `editButton${props.id}`;

  let doggoArray = [];
  let doggoBlack = <img src="/doggoBlack.png" alt="doggoBlack" />;
  let doggoGrey = <img src="/doggoGrey.png" alt="doggoGrey" />;
  for (var i = 0; i < props.rating; i++) {
    doggoArray.push(doggoBlack);
  }
  for (var i = props.rating; i < 5; i++) {
    doggoArray.push(doggoGrey);
  }
  let rating = <div className="doggo">{doggoArray}</div>;
  return (
    <div className = "spaceoutreviews">
      <div className="reviewSituation">
        <li className="review-tile-li">
          <div className="review-tile-image">
            <img src={props.attraction_image} id="review-index-image"/>
            <div className="review-index-tile-title">
              {props.attraction_name}
            </div>
          </div>
          <div className="review-content">
          {rating}
            <div id="review-text">
              {props.body}
              <br />
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
      <br />
      <br />
      <br />
    </div>
  );
};
export default MyReviewTile;

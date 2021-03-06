import React from "react";

const MyReviewTile = props => {
  let deleteButton;
  let deleteButtonId = `deleteButton${props.id}`;
  let editButton;
  let editButtonId = `editButton${props.id}`;

  let doggoBlack
  let doggoGrey
  let doggoArray = [];
  for (var i = 0; i < props.rating; i++) {
    doggoBlack = <img src="/doggoBlack.png" alt="doggoBlack" key={i} />
    doggoArray.push(doggoBlack)
  }
  for (var i = props.rating; i < 5; i++) {
    doggoGrey = <img src="/doggoGrey.png" alt="doggoGrey" key={i}/>
    doggoArray.push(doggoGrey)
  }
  let rating = <div className="doggo">{doggoArray}</div>;
  return (
    <div className = "spaceoutreviews">
      <div className="reviewSituation">
        <li className="review-tile-li">
          <a href={`/attractions/${props.attraction_id}`}>
            <div className="review-tile-image">
              <img src={props.attraction_image} id="review-index-image"/>
              <div className="review-index-tile-title">
                {props.attraction_name}
              </div>
            </div>
          </a>
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

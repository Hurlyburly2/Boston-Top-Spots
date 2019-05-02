import React from "react";

const ReviewTile = props => {
  let doggoArray = []
  let doggoBlack
  let doggoGrey

  for (var i = 0; i < props.rating; i++) {
    doggoBlack = <img src="/doggoBlack.png" alt="doggoBlack" key={i} />
    doggoArray.push(doggoBlack)
  }
  for (var i = props.rating; i < 5; i++) {
    doggoGrey = <img src="/doggoGrey.png" alt="doggoGrey" key={i}/>
    doggoArray.push(doggoGrey)
  }
  let rating = <div className="doggo">{doggoArray}</div>;

  let deleteButton;
  let deleteButtonId = `deleteButton${props.id}`;
  if (props.currentUser !== null && props.currentUser.role === "admin") {
    deleteButton = (
      <button id={deleteButtonId} onClick={props.handleDeleteReview} className="review-delete-button">
        Delete Review
      </button>
    );
  }
  let upvoteButton;
  let upvoteButtonId = `${props.id}`;
  let downvoteButton;
  let downvoteButtonId = `${props.id}`;
  if (props.currentUser !== null) {
    upvoteButton = (
      <button className="upvote" id={upvoteButtonId} onClick={props.handleVote}>
        Upvote!
      </button>
    );
    downvoteButton = (
      <button
        className="downvote"
        id={downvoteButtonId}
        onClick={props.handleVote}
      >
        Downvote!
      </button>
    );
  }
  return (
    <div>
    <hr />
    <li>
      <img src={props.profile_photo} id="profilePhoto_two"/>
      <div className = "voteArea">
        {upvoteButton} <div className="score">{props.score}</div> {downvoteButton}
        <br />
        {deleteButton}
      </div>
      <div className="add-a-lower-margin">
        <span className="comment-username">{props.username}</span>
        <div className="review-tile-indent">
        <span className="terries">{rating}</span>
          {props.body}
        </div>
      </div>
      </li>
      <br />
    </div>
  );
};

export default ReviewTile;

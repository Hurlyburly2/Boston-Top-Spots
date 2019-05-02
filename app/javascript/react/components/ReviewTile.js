import React from "react";

const ReviewTile = props => {
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
  let deleteButton;
  let deleteButtonId = `deleteButton${props.id}`;
  if (props.currentUser !== null && props.currentUser.role === "admin") {
    deleteButton = (
      <button id={deleteButtonId} onClick={props.handleDeleteReview}>
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
      <div className = "voteArea">
        {upvoteButton} <div className="score">{props.score}</div> {downvoteButton}
        <br />
        {deleteButton}
      </div>
      <span className="comment-username">{props.username}</span>
      <span className="terries">{rating}</span>
        <div className="review-tile-indent">
          {props.body}
        </div>
      </li>
      <br />
    </div>
  );
};

export default ReviewTile;

import React from "react";

const ReviewTile = props => {
  let doggoArray = []
  let doggoBlack = <img src="/doggoBlack.png" alt="doggoBlack" />
  let doggoGrey = <img src="/doggoGrey.png" alt="doggoGrey" />

  for (var i = 0; i < props.rating; i++) {
    doggoArray.push(doggoBlack)
  }
  for (var i = props.rating; i < 5; i++) {
    doggoArray.push(doggoGrey)
  }
  let rating = (
    <div className="doggo">
      {doggoArray}
    </div>
  )

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
<<<<<<< HEAD
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
=======
      {props.username}
      <img src={props.profile_photo} className=""/>
      <li>
        {rating}
        <p>{props.body}</p>
>>>>>>> 9bd86d99f2a562aecac23f32c60a8310c4e7c79b
      </li>
      <br />
    </div>
  );
};

export default ReviewTile;

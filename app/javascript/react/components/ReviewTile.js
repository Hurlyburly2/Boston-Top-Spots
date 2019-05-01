import React from "react";

const ReviewTile = (props) => {
  let deleteButtonId = `deleteButton${props.id}`
  if (props.currentUser !== null && props.currentUser.role === "admin") {
     let deleteButton = <button id={deleteButtonId} onClick={props.handleDeleteReview}>Delete Review</button>
  }
  let upvoteButtonId = `${props.id}`
  let downvoteButtonId = `${props.id}`
  if (props.currentUser !== null) {
    let upvoteButton = <button className="upvote" id={upvoteButtonId} onClick={props.handleVote}>Upvote!</button>
    let downvoteButton = <button className="downvote" id={downvoteButtonId} onClick={props.handleVote}>Downvote!</button>
  }
  return (
    <div>
      <li>
        <h3>Rating: {props.rating}</h3>
        <p>{props.body}</p>
      </li>
      {deleteButton}<br/>
      {upvoteButton} <div className="score">{props.score}</div> {downvoteButton}
    </div>
  );
};

export default ReviewTile;

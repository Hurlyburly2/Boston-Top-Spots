import React from "react";


const ReviewTile = (props) => {
  let deleteButton
  let deleteButtonId = `deleteButton${props.id}`
  if (props.currentUser !== null && props.currentUser.role === "admin") {
     deleteButton = <button id={deleteButtonId} onClick={props.handleDeleteReview}>Delete Review</button>
  }
  let upvoteButton
  let upvoteButtonId = `${props.id}`
  let downvoteButton
  let downvoteButtonId = `${props.id}`
  if (props.currentUser !== null) {
    upvoteButton = <button className="upvote" id={upvoteButtonId} onClick={props.handleVote}>Upvote!</button>
    downvoteButton = <button className="downvote" id={downvoteButtonId} onClick={props.handleVote}>Downvote!</button>

const ReviewTile = props => {
  let deleteButton;
  let buttonId = `deleteButton${props.id}`;
  if (props.currentUser !== null && props.currentUser.role === "admin") {
    deleteButton = (
      <button id={buttonId} onClick={props.handleDeleteReview}>
        Delete Review
      </button>
    );

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

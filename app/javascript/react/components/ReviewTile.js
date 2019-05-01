import React from "react";
import doggoGrey from "./doggoGrey.png"
import doggoBlack from "./doggoBlack.png"

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
  let rating;
  if (props.rating === 1) {
    rating =
    <div className="doggo">
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoGrey"/>
     <img src={doggoGrey} alt="doggoGrey"/>
     <img src={doggoGrey} alt="doggoGrey"/>
     <img src={doggoGrey} alt="doggoGrey"/>
     </div>
  } else if (props.rating === 2) {
        rating =
        <div className="doggo">
         <img src={doggoBlack} alt="doggoBlack"/>
         <img src={doggoBlack} alt="doggoBlack"/>
         <img src={doggoGrey} alt="doggoGrey"/>
         <img src={doggoGrey} alt="doggoGrey"/>
         <img src={doggoGrey} alt="doggoGrey"/>
         </div>
  } else if (props.rating === 3) {
    rating =
    <div className="doggo">
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoGrey} alt="doggoGrey"/>
     <img src={doggoGrey} alt="doggoGrey"/>
     </div>
  } else if (props.rating === 4) {
    rating =
    <div className="doggo">
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoGrey} alt="doggoGrey"/>
     </div>
  } else if (props.rating === 5) {
    rating =
    <div className="doggo">
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     <img src={doggoBlack} alt="doggoBlack"/>
     </div>
=======
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
>>>>>>> 7a34ceacbaac832a228f7143b4de61f36f587918
  }
  return (
    <div>
      <li>
        {rating}
        <p>{props.body}</p>
      </li>
      {deleteButton}<br/>
      {upvoteButton} <div className="score">{props.score}</div> {downvoteButton}
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
  )
 }

=======
  );
};
>>>>>>> master
=======
  );
};
>>>>>>> 7a34ceacbaac832a228f7143b4de61f36f587918

export default ReviewTile;

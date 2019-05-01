<<<<<<< HEAD
import React from 'react'
import doggoGrey from "./doggoGrey.png"
import doggoBlack from "./doggoBlack.png"
=======
import React from "react";
>>>>>>> master

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
  }
  return (
    <div>
      <li>
        {rating}
        <p>{props.body}</p>
      </li>
      {deleteButton}
    </div>
<<<<<<< HEAD
  )
 }

=======
  );
};
>>>>>>> master

export default ReviewTile;

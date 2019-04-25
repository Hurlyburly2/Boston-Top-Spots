import React from 'react'

const ReviewTile = (props) => {
  return (
    <div className="">
      <li>
        <h3>Rating: {props.rating}</h3>
        <p>{props.body}</p>
      </li>
    </div>
  )
}

export default ReviewTile

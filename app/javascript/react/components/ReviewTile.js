import React from 'react'

const ReviewTile = (props) => {
  return (
    <div className="">
      <h3>Rating: {props.rating}</h3>
      <p>{props.body}</p>
    </div>
  )
}

export default ReviewTile

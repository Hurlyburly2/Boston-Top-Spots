import React from "react";

const RatingSelector = props => {
  return (
    <div>
      <label>
        {props.label}
        <select name={props.name} value={props.value} onChange={props.onChange}>
          {props.options}
        </select>
      </label>
    </div>
  );
};

export default RatingSelector;

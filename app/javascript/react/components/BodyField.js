import React from 'react';

const BodyField = (props) => {
  return (
    <label>{props.label}
      <textarea
        name={props.name}
        value={props.content}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </label>
  );
}

export default BodyField;

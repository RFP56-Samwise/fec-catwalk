import React from 'react';

const Error = (props) => {
  const red = {
    color: 'red',
  }

  return (
    <div style={red}>
    <span>
      You must enter the following:
    </span>
    {props.msg.map((err, index) => <li key={index}> {err} </li>)}

  </div>
  )
};


export default Error;
import React from 'react';

const Minutes = (props) => {
  let minutes;
  if(props.minutes < 10) {
    minutes = `0${props.minutes}`;
  } else {
    minutes = props.minutes;
  }
  return <span className={props.className}>{minutes}</span>}
;

export default Minutes;
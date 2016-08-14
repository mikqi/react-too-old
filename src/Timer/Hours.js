import React from 'react';

const Hours = (props) => {
  let hours = (props.hours > 12) ? props.hours - 12 : props.hours;
  hours = (hours < 10) ? `0${hours}` : `${hours}`;
  
  return <span className={props.className}>{hours}</span>;
}; 

export default Hours;
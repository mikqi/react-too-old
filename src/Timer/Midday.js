import React from 'react';

const Midday = (props) => {

  let midday = props.hours >= 12 ? 'PM' : 'AM';

  return <span className={props.className} > {midday} </span>;
};

export default Midday;
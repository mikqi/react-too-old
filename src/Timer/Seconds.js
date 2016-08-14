import React from 'react';

const Seconds = (props) => {
  let visible = {};
  if(props.seconds % 2 === 0) {
    visible = {
      visibility: 'hidden',
    }
  } else {
    visible = {
      visibility: 'visible'
    }
  }
  return <span className={props.className} style={visible}>:</span>
};

export default Seconds;
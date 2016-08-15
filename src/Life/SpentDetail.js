import React from 'react';

const SpentDetail = (props) => {
  let {years,
      months,
      weeks,
      days,
      hours,
      minutes,
      secs} = props.spent;
  return (
    <div className="date-spent">
      You have spent your life around {years} years {months} months {weeks} weeks {days} days {hours} hours {minutes} minutes {secs} seconds !!!
    </div>
  );
};

export default SpentDetail;
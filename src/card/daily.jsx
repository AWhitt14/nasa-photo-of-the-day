import React from "react";
import './daily.css';

const Daily = ({ title, date, explanation, url }) => {
  return (
    <div>
     <h2>{title} |</h2>
     <p class='date'>{date}</p>
     <div class='imgBox'>
      <img src={url} alt='img'/>
      <p>{explanation}</p>
     </div>
    </div>
  );
};

export default Daily;

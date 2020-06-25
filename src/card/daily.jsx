import React, { useState } from "react";

import { Button, Fade, Alert } from 'reactstrap'

const Daily = ({ title, date, explanation, url }) => {
  const cont = styled.p`
    margin: 20%;
    border: 2px solid dodgerblue;
  `;

  return (
    <div>
     <h2>{title} |</h2>
     <p>{date}</p>
     <div>
      <img src={url} alt='img'/>
      <p>{explanation}</p>
     </div>
     <Button color="succes">Info</Button>
    </div>
  );
};

export default Daily;

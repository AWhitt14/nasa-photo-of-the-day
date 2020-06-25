import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Button, Fade } from 'reactstrap';

const Daily = ({ title, date, explanation, url }) => {
  const [fadeIn, setFadeIn] = useState(true);

  const toggle = () => {setFadeIn(!fadeIn)
  };

  const Wrapper = styled.section`
  padding: 1rem;
  background: lightblue;
  margin: 10%;
  margin-top: 1%;
  border: 2px solid dodgerblue;
`;
  
  return (
    <div>
     <h2>{title} |</h2>
     <p>{date}</p>
     <Wrapper>
      <img src={url} alt='img'/>
      <Fade in={fadeIn} tag="h5" className="mt-3">{explanation}</Fade>
      <Button color="danger" onClick={toggle}>Toggle Fade</Button>
     </Wrapper>
     
    </div>
  );
};

export default Daily;

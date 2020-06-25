import React, { useState } from "react";
import "./daily.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { Button, Popover, PopoverHeader, PopoverBody  } from 'reactstrap';

const Wrapper = styled.section`
padding: 1rem;
background: lightblue;
margin: 10%;
margin-top: 1%;
border: 2px solid dodgerblue;
`;

const Daily = ({ title, date, explanation, url }) => {
  const [pop, setPop] = useState(false);

  const tog = () => setPop(!pop);

  const close = <span className='xbtn' onClick={tog} >x</span>;
  
  return (
    <div>
     <h2>{title} |</h2>
     <p>{date}</p>

     <Wrapper>
      <Button className='b1' color="danger" onClick={tog} id="Popover1" type="button">Img Info</Button>
       <div>
      <img src={url} alt='img'/>
      </div>
     </Wrapper>
     <Popover placement="bottom" isOpen={pop} target="Popover1" toggle={tog}>
  <PopoverHeader>Popover Title            {close}</PopoverHeader>
        <PopoverBody>{explanation}</PopoverBody>
      </Popover>
    </div>
  );
};

export default Daily;

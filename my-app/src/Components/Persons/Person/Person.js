import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = (props) => {
  // // var a = 6;
  // const [a, seta] = useState(6);

  // setTimeout(function () {
  //   // use state method

  //   seta(12);
  //   // alert("VALUE OF A", a);
  // }, 3000);

  // const style = {
  //   "@media(min-width:500px)": {
  //     width: "450px",
  //   },
  // };
  return (
    //  <div className="person" style ={ style}>

    <styledDiv>
      <p onClick={props.click}>
        i am {props.name} and i am {props.age} year old!
      </p>
      <p> {props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
      <input type="text" onChange={props.changedAge} value={props.age} />
    </styledDiv>
  );
};

export default Person;

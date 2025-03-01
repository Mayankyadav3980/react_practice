import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const Us = () => {

  return (
    <Wrapper>
      <Title color="green">Hello this is title</Title>
    </Wrapper>
  )
}

export default Us;

const Wrapper = styled.div`
  background-color: red;
  width: 500px;
  height: 500px;
  margin: auto;
`;

export const Title = styled.h1`
  font-family: roboto;
  color: ${(props) => props.color};
  &:hover {
    color: pink;
  }
`;

import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import styles from './us.module.css';

const Us = () => {

  return (
    <div className="div-class">
      <p className={styles.p}>this is para</p>
    </div>
  );
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

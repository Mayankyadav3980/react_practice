import React from 'react'
import { memo } from 'react'

const TestComponent = ({ name, changeName }) => {
  console.log("compo rrnd, name is:", name);
  return (
    <div>
      TestComponent
      <h1>{name}</h1>
      <button onClick={changeName}>Change name</button>
    </div>
  );
};

export default memo(TestComponent)
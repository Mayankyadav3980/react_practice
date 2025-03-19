import React, {useState, forwardRef} from 'react'

const Input = (ref, props) => {
  const [name, setName] = useState("");
  return (
    <input ref={props} value={name} onChange={(e) => setName(e.target.value)} />
  );
};

export default forwardRef(Input)
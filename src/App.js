import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { useDarkMode } from "./components/CustomHook";
import "./App.css";
import Navbar from "./components/Navbar";
import TestComponent from "./components/TestComponent";

// const nums = new Array(5).fill(0).map((_, ind) => {

//     return {
//       id: ind,
//       token: ind === 4 ? "hello moto" : "buy moto(not4)"
//     };
  
// });


const App = () => {
  const [count, setcount] = useState(0);
  const [name, setName] = useState("Mayank")

  // const changeName = () => {
  //   setName("nameChanged");
  // }

  const changeName = useCallback(()=>{setName("newNameChanged")},[])

  return (
    <>
      {/* <Navbar /> */}
      <TestComponent name={name} changeName={changeName} />
      <div>{count}</div>
      <button onClick={() => setcount(count + 1)}>increase count</button>
    </>
  );
};

export default App;

import React, { useEffect, useMemo, useState } from "react";
import { useDarkMode } from "./components/CustomHook";
import "./App.css";

const nums = new Array(5).fill(0).map((_, ind) => {

    return {
      id: ind,
      token: ind === 4 ? "hello moto" : "buy moto(not4)"
    };
  
});


const App = () => {
  // const [theme, ToggleTheme] = useDarkMode(localStorage.getItem("theme"));
  const [count, setcount] = useState(0)
  const [numbers, setNumbers] = useState(nums);

  // const ourValue = nums.find(obj => obj.id===4);  //expansive computation
  const memoUseValue = useMemo(()=>{ console.log('memo rendered'); return nums.find(obj => obj.id===4);}, [] )

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setcount(count + 1)}>inc count</button>
      <div>{memoUseValue.token}</div>
    </>
  );
};

export default App;

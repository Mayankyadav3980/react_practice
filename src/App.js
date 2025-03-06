import React, { useDebugValue, useState } from 'react'


const App = () => {
  const [rv, fun] = useCustomHook("mayank");
  const [newState, setNewState] = useState('stat')
  return (
    <div>App
      <p>name is: {rv}</p>
      <button onClick={()=>fun("maYad")}>Change name</button>
    </div>
  )
}

export default App


const useCustomHook = (val) => {
  useDebugValue(val);
  const [name, setName] = React.useState(val);
  return [name, setName];
}
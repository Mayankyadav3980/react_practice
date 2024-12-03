import React, { useState } from 'react'

const App = () => {
    const [state, setState] = useState(false);
  return (
    <div> 
        {state ? <p>App</p> : <p>state is false</p>}
        <button onClick={()=>setState(!state)}>toggle</button>
    </div>

    // <>{state && <p>this is ptag</p>}</>
  );
}

export default App
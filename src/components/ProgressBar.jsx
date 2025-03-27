import { useState } from "react";

const ProgressBar = () => {
    const [count, setCount ] = useState(0);
    const end = 100;

    const handleClick = ()=> {
         let id = setInterval(()=>{
            if(count === 100){
                clearInterval(id);
                console.log('100 reached')
                return;
            }
            setCount(c=>c+1);
        },50)
    }

    return (
        <div className="container">
            <div className="bar">{count}</div>
            <button onClick={handleClick}>Start</button>
        </div>
    )
}

export default ProgressBar;
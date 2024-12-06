import React, { useState } from 'react'
import './App.css'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const App = () => {
    const [current, setCurrent] = useState(0);
    let lenght = imgArr.length;

    const prevImg= ()=>{
      setCurrent(current == 0? lenght-1 : current-1);
      console.log(current);
      
    }

    const nextImg = () => {
      setCurrent(current == lenght-1 ? 0 : current+1);
      console.log(current);
    };
    
  return (
    <div className="carousel_container">
      <FaArrowAltCircleLeft className="left-arrow arrow" onClick={prevImg} />
      <FaArrowAltCircleRight className="right-arrow arrow" onClick={nextImg} />
      <div className="modal">
        {imgArr.map((url, idx) => {
          if(current == idx)
          return <img key={idx} className="carousel_image" src={url} alt="img" />;
        })}
      </div>
    </div>
  );
}

export default App


const imgArr = [
  "https://c8.alamy.com/comp/PT3D01/jagannath-temple-at-puri-odisha-india-PT3D01.jpg",
  "https://i.pinimg.com/originals/69/df/42/69df426b5d499acc756cffc982b8e432.jpg"
];
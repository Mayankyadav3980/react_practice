import React from 'react'

const Us = () => {
  const getData = async()=>{
    console.log("b");
    //  fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    await setTimeout(()=>console.log("timeout"))
    console.log("a");
  }
     getData();
  return (
    <div>Us</div>
  )
}

export default Us
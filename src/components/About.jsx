import React, { useState } from "react";
import { use } from "react";

const About = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
  });

  const [list, setList] = useState([]);

  // console.log("before fetch", list);
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((res)=> res.json())
  // .then((data)=>setList(data))
  // const data = res.json();

  // console.log("after fetch", list);
  

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setUserData((prevState) => ({...prevState, [field]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevState) => ([...prevState, userData]));
    setUserData({
      name: "",
      age: "",
    });
    console.log(list)

  }
  return (
    <div className="main-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="name"
            type="text"
            name="name"
            required
            value={userData.name}
            onChange={handleChange}
          />
          <input
            placeholder="age"
            type="number"
            name="age"
            required
            value={userData.age}
            onChange={handleChange}
          />
          <button>Add</button>
        </form>
      </div>

      <div>
        {list.map((obj, idx)=>{
            return <div>
                <p>{obj.name}</p>
                <p>{obj.age}</p>
            </div>
        })}
      </div>
    </div>
  );
};

export default About;

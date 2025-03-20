import React, { useEffect, useState } from "react";
import "./App.css"

const App = () => {
  const [data, setData] = useState([]);
  const [selectOptions, setSelectOptions] = useState([])
  const [text, setText] = useState("");
  const [suggList, setSuggList] = useState([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      console.log("response not ok");
    }
    const json = await res.json();
    // console.log(json);
    setSelectOptions(Object.keys(json[0]));
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  const showSuggestions = (value) => {
    // console.log(value);
    const suggArr = data.filter((user)=> user.name.toLowerCase().includes(value.toLowerCase()));
    setSuggList(suggArr);
    // console.log('suggArr: ', suggArr)
  }

  const handleChange = (value) => {
    setText(value);
    if(value !== "")
    showSuggestions(value);
  }
  const handleClick = (user) => {
    setText(user.name);
    setSuggList([]);
  }
  return (
    <div className="container">
      <label>Choose field:</label>
      <select defaultValue={`name`}>
        {selectOptions.map((val) => (
          <option value={val}>{val}</option>
          // val === 'name'? <option value={val} selected>{val}</option>:<option value={val}>{val}</option>
        ))}
      </select>
      <input
        placeholder="type here"
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        className="inp"
      />

      <ul>
        {suggList.map((l) => {
          return (
            <li key={l.id} className="list-item" onClick={() => handleClick(l)}>
              {l.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
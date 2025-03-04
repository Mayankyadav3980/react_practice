import React, { useState, useEffect, useRef } from "react";
import './App.css'
const App = () => {
  const [data, setData] = useState([]);
  const fieldRef = useRef();
  const [field, setField] = useState('name');
  const [suggList, setSuggList] = useState([]);
  const [inp, setInput] = useState('');

  const getData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) {
        console.log("res not ok");
        return;
      }
      const userData = await res.json();
      setData(userData);
    } catch (err) {
      console.log("err occured");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getSuggestionList = (namee) => {

    console.log('field: ',field);
    console.log('searched term: ',namee);
    const list = data.filter((obj) => {
      return obj[field].toLowerCase().includes(namee.toLowerCase());
    });
    console.log('slist is:', list)
    setSuggList(list);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    getSuggestionList(value);
  };

  const handleFieldChange = () => {
    setField(fieldRef.current.value);
    setInput('');
    setSuggList([]);
  }

  return (
    <div>
      <input placeholder="search here" value={inp} onChange={handleChange} />
      <div>
        {suggList.length > 0 && (
          <ul>
            {suggList.map((obj) => (
              <li
                key={obj.id}
                onClick={() => {setInput(obj[field]); setSuggList([]) } }
              >
                {obj[field]}
              </li>
            ))}
          </ul>
        ) }
      </div>

      <h2>dropdown menu</h2>
      <label htmlFor="field">Choose a field:</label>
      {data.length > 0 && (
        <select name="field" id="fields" ref={fieldRef} onChange={handleFieldChange}>
          {Object.keys(data[0]).map((f, idx) =>  (
              <option key={idx} value={f}>
                {f}
              </option>
            )
          )}
        </select>
      )}
    </div>
  );
};

export default App;

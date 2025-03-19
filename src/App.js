import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [suggList, setSuggList] = useState([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
      console.log("response not ok");
    }
    const json = await res.json();
    // console.log(json);
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
    showSuggestions(value);
  }
  return (
    <div>
      <input placeholder="type here"
             value={text}
             onChange={(e)=>handleChange(e.target.value)} 
             className={styles.input}/>
      <ul>
        {suggList.map((l,idx)=>{
          return <li key={idx}>{l.name}</li>
        })}
      </ul>
    </div>
  );
};

export default App;

const styles = {
  input:{
    width:"50vw",
    margin: " 20px auto"
  }
}
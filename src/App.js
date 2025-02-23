import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [ud, setUd] = useState({
    id: "",
    name: "",
    email: ""
  });
  const [edit, setEdit] = useState(false);

  const [reset, setReset] = useState(false);

  const getData = async ()=>{
    
    try{
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if(res.ok){
        const userData = await res.json();
        setData(userData.map(obj=>({...obj, count: 0})));
      }
    }catch(e){
      setErr(e);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    getData();
  },[reset]);

  const handleDec = (id)=>{
    setData((pv) => pv.map((obj) => (obj.id === id ? { ...obj, count: obj.count - 1 } : obj))
    );
  }
  const handleInc = (id)=>{
    setData(pv=> pv.map(obj=>(obj.id === id) ? {...obj, count: obj.count+1} : obj))
  }

  const handleDelete = (id) => setData((prevState) => prevState.filter(obj=> obj.id !== id))

 
  
  const handleInput = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setUd(ps => ({...ps, [field]: value}))
  }
  
   const handleEdit = (id) => {
     setEdit(!edit);
     let user = data.find((obj) => obj.id === id);
     setUd(user);
   };

  const handleUpdate = (e) => {
    setData(ps => ps.map(obj => obj.id === ud.id ? ud : obj))
     setUd({
       id: "",
       name: "",
       email: "",
     });
     setEdit(false)
     e.preventDefault();
  }

  const handleSubmit = (e) => {
   
    setData(ps => ([...ps, ud]))
    // data.push(ud);
    setUd({
      id: "",
      name: "",
      email: "",
    });
     e.preventDefault();
  }

  if(loading) return <h1>Loading...</h1>
  if(err) return <h1>Something went wrong!!</h1>

  return (
    <>
      <form onSubmit={ edit ? handleUpdate : handleSubmit }>
        <input
          placeholder="id"
          required
          name="id"
          value={ud.id}
          onChange={handleInput}
        />
        <input
          placeholder="name"
          required
          name="name"
          value={ud.name}
          onChange={handleInput}
        />
        <input
          placeholder="email"
          required
          name="email"
          value={ud.email}
          onChange={handleInput}
        />
        <button type="submit">{edit ? "Update" : "Add"}</button>
      </form>
      <table>
        <caption>User Database</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Income</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => {
            return (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>
                  {" "}
                  <button onClick={() => handleDec(obj.id)}>-</button>
                  {obj.count}
                  <button onClick={() => handleInc(obj.id)}>+</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(obj.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(obj.id)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => setReset((pv) => !pv)}>Reset Data</button>
    </>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  console.log("inside app compo at top");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
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
    console.log("inside useEffect");
    getData();

    return ()=> console.log("compo is unmounting")
  },[reset]);

  const handleDec = (id)=>{
    setData(pv=>{
     return pv.map(obj=>{
        if(obj.id === id){
          return {...obj, count: obj.count-1};
        }
        return obj;
      })
    })
  }
  const handleInc = (id)=>{
    setData(pv=>{
     return pv.map(obj=>{
        if(obj.id === id){
          return {...obj, count: obj.count+1};
        }
        return obj;
      })
    })
  }

  

  console.log("below useEffect");
  if(loading) return <h1>Loading...</h1>
  if(err) return <h1>Something went wrong!!</h1>

  return (
    <>
      <table>
        <caption>User Database</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th colSpan="2">Income</th>
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
                <td>?</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={()=>setReset(pv=>!pv)}>Reset Data</button>
    </>
  );
};

export default App;

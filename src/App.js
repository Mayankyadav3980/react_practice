import { useEffect, useState } from "react";

 function App() {
    const [ data, setData ] = useState([]);
    console.log('above hook');
    useEffect( () => {
      console.log('inside hook');
      const getData = async () => {
         let res = await fetch('https://jsonplaceholder.typicode.com/users');
         let uData = await res.json();
         setData( uData );
      }
    
       getData();
    },[])  
 console.log('below hook');
   
  return (    
    <div className="App">
        <h1>User data is displayed Below</h1> 
        {
          data.map((obj) => {
            return(
              <div style={{display:'flex',justifyContent:'space-around', border:'1px solid black'}}>     
                <p>{obj.id}</p>
                <p>{obj.name}</p>
                <p>{obj.email}</p> 
              </div>
            )
          })
        } 
        
    </div>

  );
}

export default App;


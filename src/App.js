import { useEffect, useState } from "react";

 function App() {
    const [userData, setUserData] = useState({
      id: '',
      name:'',
      count:0
    })
    const [ data, setData ] = useState([
      { id:1,
        name:'ram',
        count:5
      },
      { id:2,
        name:'shyam',
        count:6
      },
      { id:3,
        name:'mohan',
        count:7
      },
      { id:4,
        name:'rohan',
        count:5
      }
  ])

  const handleDelete = (iD) => {
    setData( (pv) => {
      return pv.filter((ele) => {
        return iD !== ele.id
      })
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((pv) => {
      return { ...pv, [name] : value};
    })
  }

  const addUser = () => {
    
    setData( (pv) => {
      return [...pv, userData];
    })
    setUserData({ id: '', name:''})
  }

  const handleInc = (iD) => {
    setData( (pv) => {
      return pv.map((obj) => {
        if(obj.id === iD){
          return { ...obj, count: obj.count+1}
        }
        else{
          return obj;
        }
      })
    })
  }
  const handleDec = (iD) => {
    setData((pv) => {
      return pv.map((obj) => {
        if(obj.id === iD){
          return { ...obj, count: obj.count-1}
        }
        else{
          return obj;
        }
      })
    })
  }

    return(
      <div>
        <div style={{textAlign:'center'}}>
        <input 
          name="id" 
          placeholder="enter id"
          value={userData.id}
          onChange={handleChange}
          />

        <input 
          name="name" 
          placeholder="enter name"
          value={userData.name}
          onChange={handleChange}
        />
        <button onClick={ addUser }>Add user</button>
        </div>
        
        {
          data.map( (obj, idx) => {
            return(
              <div style={{ display:'flex', justifyContent:'space-around'}} key={idx}>
                <h3>{ obj.name }</h3>
                <button onClick={ ()=> { handleDelete(obj.id)}}> delete </button>
                <div>
                <button onClick={() =>{ handleDec(obj.id, 'dec')}} disabled={obj.count === 0 && true } >-</button>
                {obj.count}
                <button onClick={() =>{ handleInc(obj.id, 'inc')}} >+</button>
                </div>
              </div>
              
            )
          })
        }
      </div>
    )
}

export default App;



// const [ data, setData ] = useState([
//   { id: 1,
//     name: 'a',
//     email: 'abc',
//     count: 0
//   },
//   { id: 2,
//     name: 'b',
//     email: 'abc',
//     count: 0
//   },
//   { id: 3,
//     name: 'c',
//     email: 'abc',
//     count: 0
//   },
// ]);

// // useEffect( () => {
// //   const getData = async () => {
// //      let res = await fetch('https://jsonplaceholder.typicode.com/users');
// //      let uData = await res.json();
// //      setData( uData );
// //   }

// //    getData();
// // },[])  
// const handleClickD = (iD) => {
//   console.log('D clicked : ' + iD);

//   setData((pv) => {
    
//     // let na = pv.
//     for(let i=0; i<pv.length; i++){
//       if(pv[i].id === iD){
//         console.log('obj found which isclicked');
//         // setData(...pv, {...pv[i], })
//       }
//     }
    
//     // return na;
//   })
//   // data.forEach(element => {
//   //   if(element.id == iD){
//   //     element.count = element.count - 1;
//   //   }
//   // });
// }

// return (    
// <div className="App">
//     <h1>User data is displayed Below</h1> 
//     {
//       data.map((obj) => {
//         return(
//           <div style={{display:'flex',justifyContent:'space-around', border:'1px solid black'}}>     
//             <p>{obj.id}</p>
//             <p>{obj.name}</p>
//             <p>{obj.email}</p> 
//             <p>
//               <button type="button" onClick={ ()=>{ handleClickD(obj.id)}}>-</button>
//               {obj.count}
//               <button type="button">+</button>
//               </p>
//           </div>
//         )
//       })
//     } 
    
// </div>

// );
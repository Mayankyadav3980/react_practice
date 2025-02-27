import React, { useEffect, useState } from 'react'

const Us = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);


  const getData = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=5&_page=${page}`);
    const data = await res.json();
    setData(ps => [...ps, ...data]);
    setPage(page+1);
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <div>
      <ul>
        {data.map(obj => (
          <li key={obj.id}>{obj.name}</li>
        ))}
      </ul>
      <button onClick={getData}>Load more!</button>
    </div>
  )
}

export default Us
import React, { useEffect } from 'react'
import { useState } from 'react';

const Remaincard = () => {
  //  const data = window.localStorage.getItem("cardcount");
  //  console.log(data);
  const [count,setCount] = useState(5);
  // setCount(co)
  

  // useEffect(() => {
  //   console.log('I am gandu')
  // //  setCount(6)
  //   // window.localStorage.setItem("cardcount", JSON.stringify(count-1));
  //   setCount(count-1)
  // }, [])
  //  window.localStorage.setItem("cardcount", JSON.stringify(count-1));
  return (
    <div className="remain-container">
        <p>Cards</p>
        <p>Remaining: {count}</p>
    </div>
  )
}

export default Remaincard
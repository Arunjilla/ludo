import React, { useState } from 'react'
const Incefun =()=>{
  const[a,b]=useState(0);
  return(
    <>
    <h1>{a}</h1>
    <button onClick={()=>b(a+1)}>Click</button>
    </>
  )

}
export default Incefun;
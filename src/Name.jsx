import React, { useState } from 'react'
const Name =()=>{
    const [name, setname]=useState("Arun")
   
    return(

        <>
        <p>Name is: {name}</p>
        <button onClick={()=>setname("Jilla")}>Cilck Name Change </button>
        </>
    )
}
export default Name;
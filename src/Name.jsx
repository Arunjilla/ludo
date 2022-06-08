import React, { useState } from 'react'
const Name =()=>{
    const [name, setname]=useState("Aru")
    return(
        <>
        <h1>Hi {name}</h1>
        <button onClick={()=>setname("jilla")}>Click Name Change</button>
        </>
    )
}
export default Name
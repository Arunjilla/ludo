import React, { useState } from 'react'
const Name =()=>{
    const [name, setname]=useState("Arun")
    const update=(name)=>{
        setname(name)
    }
    return(

        <>
        <p>Name is: {name}</p>
        <button onClick={()=>update("Jilla")}>Cilck Name Change </button>
        </>
    )
}
export default Name;
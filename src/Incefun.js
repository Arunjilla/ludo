import React, { useState } from "react";
 const Ince =()=>{
     const [a,b]=useState(0);
    return(
        <>
        {a}
          <button onClick={()=>b(a+1)}>Ince</button> 
            
        
        </>
    )

 }
 export default Ince;
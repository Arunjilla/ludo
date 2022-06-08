import React, { useState } from 'react'
const Textbox1 = () => {
    const [a, b] = useState(10)
    const update=(e)=>{
        b(e.target.value)
    }

   

    
    return (
        <>
            <textarea type="text" value={a} onChange={update} />
            <p>My Name is h :{a}</p>
        </>
    )
}
export default Textbox1;
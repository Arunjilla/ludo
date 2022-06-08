import React, { useState } from 'react'
const Textbox1 = () => {
    const [a, b] = useState(10)

    const update = (e) => {
         b({ a: e.target.value })
        

    }
    return (
        <>
            <input type="text" value={a} onChange={update} />
            <p>My Name is :{a}</p>
        </>
    )
}
export default Textbox1;
import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Inceclass from './Inceclass'
const Rout =(props)=>{
    return(
        <>
          {/* <img src='https://thumbs.dreamstime.com/b/flowers-4999705.jpg' width='200px' height='200px' alt="Image1"/> */}
        <BrowserRouter>
        <Link to='home'>Increment class</Link>
        <Routes>
            <Route path='/home' element={<Inceclass name="Arun" />}/>
        </Routes>
        
        </BrowserRouter>
        <button onClick={()=>this.props.name('Jilla')}>Clik1</button>

        </>
    )
}
export default Rout;
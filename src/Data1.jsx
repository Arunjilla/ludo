import React from 'react'
import Data from './Data.json'
import  './Empp.css'
class Data1 extends React.Component{
    render(){
        return(
            <>
            <table>
                <tr>
                <th>Id</th>
                <th>Fname</th>
                <th>Lname</th>
                <th>Image</th>
                </tr>
                
                    {Data.map((item, i)=>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td><img src={item.path} style={{width:'200px', height:"200px"}}/></td>
                         
                     </tr>                
                    )}
               

                </table>
            </>
        )
    }
}
export default Data1;
import React, { Component } from 'react';
import employee1 from './Emp.json'
import './Empp.css'
class LocalFileRead extends Component {

render(){
    return(
        <>
        <table>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Salary</th>
                <th>Image</th>
            </tr>
            {employee1.map((record, i)=>
            <tr key={i}>
                <td>{record.id}</td>
                <td>{record.title}</td>
                <td>{record.salary}</td>
                <td><img src={record.path} /></td>
                


            </tr>

            )}



        </table>

        
        
        </>
    )
}


}
    
    

export default LocalFileRead;
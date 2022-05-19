import React from 'react';

class ToDo extends React.Component{
    render(){
        return (
            <li className="list-group-item d-flex align-tiems-center">
                Ranger la vaisselle 
                <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
        )
    }
}

export default ToDo
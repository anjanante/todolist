import React from 'react';
import ToDO from './ToDo';

const ToDoList = ({task}) => (
    <>
        <h1 className="m-3">Liste des tâches</h1>
        <ul className="list-group m-3">
            {
                task.map()
            }
           <ToDO />
        </ul>
    </>
)

export default ToDoList;
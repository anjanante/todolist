import React from 'react';
import ToDo from './ToDo';
import { useParams } from "react-router-dom";

// const ToDoList = ({tasks, match}) => {
const ToDoList = ({tasks}) => {
    let filteredTasks;
    let params = useParams();
    // switch (match.params.filter) {
    switch (params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
            break;
    
        default:
            filteredTasks = tasks
            break;
    }

    if(filteredTasks.length === 0)
    {
        return (
            <>
                <h1 className="m-3">Liste des tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item">Aucune tâche à afficher</li>
                </ul>
            </>
        )
    }else{
        return (
            <>
                <h1 className="m-3">Liste des tâches</h1>
                <ul className="list-group m-3">
                    {
                        filteredTasks.map((task) => <ToDo task={task} key={task.id} />)
                    }
                    
                </ul>
            </>
        )
    }
}

export default ToDoList;
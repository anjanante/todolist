import React from 'react';
import ToDo from './ToDo';
import { useParams } from 'react-router-dom'

const ToDoList = ({tasks,onToggleCompleted}) => {
    let newTask = tasks
    let params = useParams()
    if(params.filter == 'completed')
    {
        newTask = tasks.filter(task => task.completed)
    }

    if(newTask.length === 0)
    {
        return  (
            <>
                <h1 className="m-3">Liste des tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item d-flex align-tiems-center">Aucune tache</li>
                </ul>
            </>
        )
    }else{
        return (
            <>
                <h1 className="m-3">Liste des tâches</h1>
                <ul className="list-group m-3">
                    {
                        newTask.map(task => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
                    }
                </ul>
            </>
        )
    }
}

export default ToDoList;
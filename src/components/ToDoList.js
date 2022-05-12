import React from 'react';

const ToDoList = () => (
    <>
        <h1 className="m-3">Liste des tâches</h1>
        <ul className="list-group m-3">
            <li className="list-group-item d-flex align-tiems-center">
                Ranger la vaisselle 
                <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                Répondre appel d'offres
                <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                Signer contrat
                <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
            <li className="list-group-item d-flex align-tiems-center">
                Ranger la salon
                <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
            </li>
        </ul>
    </>
)

export default ToDoList;
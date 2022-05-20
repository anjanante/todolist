import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import initialData from '../initialData';

class App extends React.Component{
    state = {
        tasks:initialData
    }

    onToogleCompleted = (taskId) => {
        let newTask = this.state.tasks.find(task => (task.id === taskId))
        newTask.completed = !newTask.completed

        this.setState(prevState => {
            prevState.tasks.map(task => {
                return (task.id === taskId) ? newTask : task
            })
        })
    }

    render(){
        return (
            <section id="todo">
                <BrowserRouter>
                    {/* <Switch> */}
                    <Routes>
                        {/* <Route path='/add-task' component={AddTask} /> */}
                        <Route path='/add-task' element={<AddTask />} />
                        {/* <Route path='/:filter?' element={<ToDoList />} /> */}
                        <Route path='/' element={<ToDoList tasks={this.state.tasks} />} >
                            <Route path=':filter' element={<ToDoList />} />
                        </Route>
                    </Routes>
                    <NavBar />
                </BrowserRouter>
            </section>
        )
    }
}

export default App;
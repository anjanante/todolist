import React from 'react';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import AddTask from './AddTask';
// import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import initialData from '../initialData';
import Fetching from './Fetching';

class App extends React.Component{
    state = {
        tasks:[],
        fetching:true
    }
    /*On check element*/
    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => (
            prevState.tasks.map(task => {
                return task.id === taskId ? taskToUpdate : task
            })
        ))
    } 
    /*On Add new element*/
    onAddTask = (newTaskName) => {
        let newTask = {
            id: new Date().getTime(),
            name:newTaskName,
            completed:false
        }

        this.setState(prevState => ({
            tasks: [...prevState.tasks,newTask]
        }))
    }

    /*On Delete complete*/
    onDeleteCompleted = () => {
        console.log('onDeleteCompleted')
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => !task.completed)
        }))
    }

    shouldComponentUpdate = () => {
        console.log('shouldComponentUpdate')
        return true
    }

    componentDidMount = () => {
        console.log('componentDidMount')
        let delay = Math.floor(Math.random() * 5000)
        setTimeout(() => {
            this.setState({
                fetching:false,
                tasks:initialData
            })
        }, delay)
    }

    componentDidUpdate = () => {
        console.log('componentDidUpdate')
    }

    getSnapshotBeforeUpdate = () => {
        console.log('getSnapshotBeforeUpdate')
    }

    render(){
        console.log('render')
        return (
            <section id="todo">
                {this.state.fetching ? <Fetching /> : null}
                <BrowserRouter>
                    {/* <Switch> */}
                    <Routes>
                        {/* <Route path='/add-task' component={AddTask} /> */}
                        <Route path='/add-task' element={<AddTask onAddTask={this.onAddTask} />} />
                        {/* <Route path='/:filter?' element={<ToDoList />} /> */}
                        <Route path='/' element={<ToDoList tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} >
                            <Route path=':filter' element={<ToDoList />} />
                        </Route>
                    </Routes>
                    <NavBar onDeleteCompleted={this.onDeleteCompleted}/>
                </BrowserRouter>
            </section>
        )
    }
}

export default App;
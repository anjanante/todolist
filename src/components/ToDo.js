import React from "react";

class ToDo extends React.Component{
    state = {
        completed : this.props.task.completed
    }

    toogleCompleted = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
    }

    render(){
        return (
            <li className={"list-group-item d-flex align-tiems-center " + (this.state.completed ? "bg-success" : null) }>
                {this.props.task.name}
                <button className={"btn btn-sm ms-auto " + (this.state.completed ? "btn-success" : "btn-outline-success")} onClick={this.toogleCompleted}>&#x2713;</button>
            </li>
        )
    }
}

export default ToDo
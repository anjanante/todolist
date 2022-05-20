import React from 'react';
import { Navigate   } from 'react-router-dom';

class AddTask extends React.Component{
    state={
        isOk:false
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddTask(this.newTask.value)
        // this.props.history.push('/')
        // let navigate = useNavigate()
        // navigate('/')
        this.setState({isOk:!this.state.isOk})
    }

    render(){
        if(this.state.isOk)
        {
            return <Navigate to='/'/>
        }else{

            return (
                <section>
                    <h1 className="m-3">Nouvelle tâche</h1>
                    <div className="card mx-3">
                        <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="mb-3">
                            <label form="taskName"  className="form-label">Nom de la tâche</label>
                            <input type="text" className="form-control" name="taskName"  required ref={input => this.newTask = input} />
                        </div>
                        <button type="submit" className="btn btn-primary">Créer</button>
                        </form>
                    </div>
                </section>
            )
        }
    }
}

export default AddTask

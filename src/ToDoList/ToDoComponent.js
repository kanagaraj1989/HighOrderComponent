import React, {Component} from 'react'
import ToDoListComponent from './ToDoListComponent'

class ToDoComponent extends Component {
    constructor(props) {
        super(props)
        this.todo = ["test", "best", "waste", "one"]
    }

    nullcheck = (WraperComponent) => props =>       
            props.todo === null 
            ? null
            : <WraperComponent {...props}/>

    render() {

        const props = Object.assign({}, this.props, {
          todo: this.todo   
        })
        const ToDoComp = this.nullcheck(ToDoListComponent)
        return (<ToDoComp {...props}/>)
    }
}

export default ToDoComponent
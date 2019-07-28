import React, {Component} from 'react'
import ToDoItem from './ToDoItem'

const ToDoListComponent = props => {
    return(
        props.todo.map( todo =><ToDoItem todo={todo}/>)
    )
}

export default ToDoListComponent
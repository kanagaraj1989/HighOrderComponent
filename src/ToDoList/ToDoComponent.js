import React, {Component} from 'react'
import ToDoListComponent from './ToDoListComponent'
import {compose} from 'recompose'

class ToDoComponent extends Component {
    constructor(props) {
        super(props)
        this.todo = ["one","two","three", "four", "five"]
    }

    nullcheck = (WraperComponent) => props =>       
            !props.todo 
            ? null
            : <WraperComponent {...props}/>

    emptyCheck =  EmptyComponent => ToDoComponent => props =>
        props.todo && !props.todo.length
        ? <EmptyComponent {...props}/>
        : <ToDoComponent {...props}/>

    emptyComponent = () => <div>There is no ToDoList Available.</div>

    render() {

        const props = Object.assign({}, this.props, {
          todo: this.todo   
        })
        const WithConditionalRender = compose(
            this.emptyCheck(this.emptyComponent),
            this.nullcheck 
        )
        const ConditionalRender = WithConditionalRender(ToDoListComponent)
        //const ToDoComp = this.nullcheck(ToDoListComponent)
        //const SecValidation = this.emptyCheck(ToDoComp, this.emptyComponent)

        return (<ConditionalRender {...props}/>)
    }
}

export default ToDoComponent
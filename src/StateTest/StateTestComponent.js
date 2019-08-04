import React from 'react'
import  StateComponent from  './StateComponent'
import {compose, withState} from 'recompose'

const Toggle = ({toggle, onToggleList}) => (
    <button type="button" onClick={onToggleList}>
        {toggle ? 'Hide' : 'Show'}
    </button>
)

const List = ({list}) => (
    <ul>
        { list.map( (item) =>(
           <li key={item}>{item}</li> 
        )) }
    </ul>
)

const StateTestComponent = ({list, toggle, onToggleList}) => {
    return(
        <div>            
          <Toggle 
            toggle={toggle}
            onToggleList={()=>onToggleList(!toggle)}>
          </Toggle>
          {toggle && <List list={list}></List>}
        </div>       
    )
}
const  StateTestAppComponent = compose(
    withState('toggle','onToggleList', true),
    withState('list', null, [1,2,3,4,5])
)(StateTestComponent)

export default StateTestAppComponent

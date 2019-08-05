import React, {Component} from 'react'
import {compose, withState} from 'recompose'

const Toggle = ({toggle, onToggleList}) =>(
    <button type="button" onClick={onToggleList}>
        {toggle ? 'Hide' : 'Show'}
    </button>
)

const ToggleList = ({list}) => (
    list.map( item => <li key={item}>{item}</li>)
)

const StateComponent = ({list,toggle,onToggleList}) => {
    return(
        <div>
            <Toggle toggle={toggle} onToggleList={()=>onToggleList(!toggle)}></Toggle>
            {toggle && <ToggleList list={list}></ToggleList>}
        </div>
    )
}

const StateComponentApp = compose(
    withState('toggle','onToggleList', true),
    withState('list',null,["kana","raj","Deepa","Lithvik","Pranav"])
)(StateComponent)

export default StateComponentApp
import React, {Component} from 'react'

class StateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle : props.toggle
        }
    }

    toggleList = toggle => this.setState(prevState => ({toggle : prevState.toggle}))

    render() {
        return this.props.children(this.state.toggle, this.toggleList)
    }
}

export default StateComponent
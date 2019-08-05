import React, {Component} from 'react'

class Amount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 0
        }
    }

    onIncrement = () => this.setState(prevState => ({amount: prevState.amount + 1}) )

    onDecrement = () => this.setState(prevState => ({amount: prevState.amount - 1}))

    render(){
        return(
            <div>
                <div>{this.state.amount}</div>
                <button type="button" onClick={()=>this.onIncrement()}>Increment</button>
                <button type="button" onClick={()=>this.onDecrement()}>Decrement</button>
                {this.props.currencyConverter(this.state.amount)}
            </div>
        )
    }
}

export default Amount

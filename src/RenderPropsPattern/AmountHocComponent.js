import React, {Component} from 'react'

const AmountHocComponent = currencyComponent => 
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
                    {currencyComponent.map( CurrComp =>
                        <CurrComp amount={this.state.amount}></CurrComp>)}
                </div>
            )
        }
    }

export default AmountHocComponent

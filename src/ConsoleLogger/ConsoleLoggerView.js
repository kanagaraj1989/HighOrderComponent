import React, {Component} from 'react'
import LoggerComponent from '../Logger/LoggerComponent'
class ConsoleLoggerView extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <input type="button" onClick={()=>this.props.info("Info message will be display")}
                    value={this.props.infoBtnName}/>
                Console logger Component rendered
            </div> 
        )
    }
}

export default ConsoleLoggerView;




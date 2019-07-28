import LoggerComponent from '../Logger/LoggerComponent'
 import ConsoleLoggerView from './ConsoleLoggerView'
 import React, {Component} from 'react'

 class ConsoleLoggerComponent extends Component {
     constructor(props) {
         super(props)
     }


     info = info => window.console.log("console indo:" +info)
     buttonName =() => "Info Button"
     render() {
        const props = Object.assign({}, this.props, {
            info: this.info 
        })

        const methods = {
            info: this.info,
            buttonName: this.buttonName
        }

        const ConsoleLoggerComp = LoggerComponent(ConsoleLoggerView, {...methods})
        return (
            <ConsoleLoggerComp />
        )
     }
 }


export default ConsoleLoggerComponent
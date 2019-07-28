import React, {Component} from 'react'

function LoggerComponent(Wrappercomponent, info) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                infoBtnName:info.buttonName()
            }
            console.log("test="+ info.buttonName() )
        }

        info = data => info.info(data)

        warning = warning => window.console.log(warning) 

        error = error => window.console.log(error)

        render() {
            const props = Object.assign({},this.props, {
                info: this.info,
                warning: this.warning,
                error: this.error,
                infoBtnName: this.state.infoBtnName
            })
           
            return  <div><Wrappercomponent {...props}></Wrappercomponent></div>
            
        }
    }
}

export default LoggerComponent
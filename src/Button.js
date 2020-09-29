import React from 'react'
import Button from '@material-ui/core/Button';

import "./Button.css"


export default class UpgradedButton extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        buttonText: "SUBSCRIBE",
        button: false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
      console.log("Button clicked...")
      let buttonText = this.state.buttonText == "SUBSCRIBE" ? "  SUBSCRIBED" :"SUBSCRIBE" 
      
      this.setState({buttonText: buttonText})
      this.setState({
        button:!this.state.button
      })
    }

    render(){
      return (
        <button className={this.state.button ? "buttonFalse": "buttonTrue"} onClick={this.handleClick}>{this.state.buttonText}</button>
      )
    }
}
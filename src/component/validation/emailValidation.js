
import React, { Component } from 'react'
import ValidationText from './ValidationText';

class emailValidationBox extends Component {
  render() {
    return (
      <div className="validationBox emailValidationBox">
      
        <ValidationText text="Email must be in a correct format (Ex: example@email.com)"  validationState={this.props.validationState.Format}/>
        <ValidationText text="Email must be unique" validationState={this.props.validationState.Unique} />
      
      </div>
    )
  }
}
export default  emailValidationBox;

import React, { Component } from 'react'
import ValidationText from './ValidationText';
class passwordValidationBox extends Component {
  render() {
    return (
      <div className="validationBox passwordValidationBox">
        <ValidationText text="Password must be more than 8 characters"  validationState={this.props.validationState.MinCharacterLength}/>
        <ValidationText text="Password must have atleast one number" validationState={this.props.validationState.NumberIncluded}/>
        <ValidationText text="Password must contain atleast one capital letter" validationState={this.props.validationState.Capitalize} />
      </div>
    )
  }
}
export default  passwordValidationBox;
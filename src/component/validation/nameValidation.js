

import React, { Component } from 'react'
import ValidationText from './ValidationText';

class nameValidationBox extends Component {
  render() {
    return (
      <div className="validationBox nameValidationBox">
        <ValidationText text="Name must be more than 7 characters"  validationState={this.props.validationState.MinCharacterLength}/>
        <ValidationText text="Name must have atleast one number" validationState={this.props.validationState.NumberIncluded}/>
        <ValidationText text="Name must contain atleast one capital letter" validationState={this.props.validationState.Capitalize} />
        <ValidationText text="Name must not be more than 30 characters" validationState={this.props.validationState.MaxCharacterLength}/>
      </div>
    )
  }
}
export default  nameValidationBox;
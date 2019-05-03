import React from 'react'

export default function ValidateText(props) {
  return (
    <small style={props.validationState===true ? {color:"green"}:{}}>{props.text}</small>
  )
}
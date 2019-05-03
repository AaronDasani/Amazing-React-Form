import React from 'react'

export default function InfoButton(props) {
  return (
    <small className="infoButton" >
        <i className="far fa-question-circle" onClick={props.activeInfo.bind(this, props.name)}></i>
    </small>
  )
}

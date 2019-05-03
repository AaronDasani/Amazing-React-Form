import React from 'react'

export default function dashboard(props) {
  return (
    <div style={{textAlign:"center"}} className="Dashboard">
      <h1 style={{color:"green", fontWeight:"bold"}}>Successfully Signed In</h1>
      <hr/>
      <h3 style={{color:"black", fontWeight:"bold"}}>Kings Canyon is waiting for YOU !!</h3>
      <button className="BTN" onClick={props.SignInPage}>Go Back</button>

    </div>
  )
}

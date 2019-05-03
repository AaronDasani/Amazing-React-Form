import React, { Component } from 'react'
import './App.css';
import Form from './component/form';
import Dashboard from './component/dashboard';


class App extends Component {

  constructor(){
    super();
    this.state={
      name:"",
      email:"",
      password: "",
      ValidationSuccess:false,
      nameValidationSuccess: false,
      passwordValidationSuccess: false,
      emailValidationSuccess: false,
      activeInfo:{
        nameValidationBox:false,
        emailValidationBox:false,
        passwordValidationBox:false
      },
      ValidationText:{
        NameTexts:{
          MinCharacterLength:false,
          MaxCharacterLength:false,
          Capitalize:false,
          NumberIncluded:false,
        },
        EmailTexts:{
          Format:false,
          Unique:false
        },
        PasswordTexts:{
          MinCharacterLength:false,
          Capitalize:false,
          NumberIncluded:false,
        },
      },
    

    }
    this.activeInfo=this.activeInfo.bind(this);
    this.onTextChange=this.onTextChange.bind(this);
    this.ValidatingInputs=this.ValidatingInputs.bind(this);

  }
  activeInfo=(name)=>{
    this.setState((state)=>{

      // Activating and Deactivation info box
      Object.keys(state.activeInfo).map((key)=>{
       
        key===name ? state.activeInfo[key]=!state.activeInfo[key]: state.activeInfo[key]=false;
        return key;
      })
      return state;
    })
  }
  onTextChange=(event)=>{
   this.setState({[event.target.name]:event.target.value})
    this.ValidatingInputs(event.target.name)
  }
  ValidatingInputs=(inputToValidate)=>{
    this.setState((state)=>{
      if (inputToValidate==="name") {
        let text=state.ValidationText.NameTexts;
        state.name.length > 7 ? text.MinCharacterLength=true:text.MinCharacterLength=false;
        state.name.length <=30 && state.name.length>0 ? text.MaxCharacterLength=true:text.MaxCharacterLength=false;
        state.name!==(state.name.toLowerCase())? text.Capitalize=true:text.Capitalize=false;
        /\d/.test(state.name) ? text.NumberIncluded=true:text.NumberIncluded=false;
        
        if(text.MinCharacterLength===true &&text.MaxCharacterLength===true &&text.Capitalize===true &&text.NumberIncluded===true){
          state.nameValidationSuccess=true;
        }else{state.nameValidationSuccess=false}
      }
      
      if(inputToValidate==="email"){
        let text=state.ValidationText.EmailTexts;

        let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        state.email.length >0 ? text.Unique=true: text.Unique=false;
        re.test(state.email) ? text.Format=true:text.Format=false;

        if(text.Unique===true &&text.Format===true){
          state.emailValidationSuccess=true;
        }else{state.emailValidationSuccess=false}
      }
      if(inputToValidate==="password"){
        let text=state.ValidationText.PasswordTexts;

        state.password.length > 8 ? text.MinCharacterLength=true:text.MinCharacterLength=false;
        state.password!==(state.password.toLowerCase())? text.Capitalize=true:text.Capitalize=false;
        /\d/.test(state.password) ? text.NumberIncluded=true:text.NumberIncluded=false;

        if(text.MinCharacterLength===true  &&text.Capitalize===true &&text.NumberIncluded===true){
          state.passwordValidationSuccess=true;
        }else{state.passwordValidationSuccess=false}
      }

      return state;
    })
    
  }

  onSubmit=(event)=>{
    event.preventDefault();
    if (this.state.nameValidationSuccess===true && this.state.emailValidationSuccess===true && this.state.passwordValidationSuccess===true) {
      this.setState({ValidationSuccess:true})
    }
  }

  SignInPage=(event)=>{
    event.preventDefault();
    this.setState({ValidationSuccess:false})
    
  }

  render() {
    if(this.state.nameValidationSuccess && this.state.activeInfo.nameValidationBox){
      this.activeInfo("nameValidationBox")
    }
    if (this.state.emailValidationSuccess && this.state.activeInfo.emailValidationBox) {
      this.activeInfo("emailValidationBox")
    }
    if(this.state.passwordValidationSuccess && this.state.activeInfo.passwordValidationBox){
      this.activeInfo("passwordValidationBox")
    }
   
    return (
      <div>
        {this.state.ValidationSuccess? <Dashboard SignInPage={this.SignInPage}/>:<Form formState={this.state} activeInfo={this.activeInfo} onChange={this.onTextChange} onSubmit={this.onSubmit}/>}
      </div>
    )
  }
}


export default App;

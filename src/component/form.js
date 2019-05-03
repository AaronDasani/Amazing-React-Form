import React,{Component} from 'react';
import NameValidationBox from './validation/nameValidation';
import EmailValidationBox from './validation/emailValidation';
import PasswordValidationBox from './validation/passwordValidation';
import InfoButton from './validation/infoButton'
export default class form extends Component {

    render(){
        let formState=this.props.formState;
        return (
            
            <div className="formContainer">
                <div>
                    <div>
                    
                        <form>
                            <div>
                                <span>USERNAME</span>
                                {formState.nameValidationSuccess? <i class="fas fa-check-circle successCheck"></i>: <InfoButton activeInfo={this.props.activeInfo} name="nameValidationBox"/>}
                                
                                <input name="name" type="text" value= {formState.name} onChange={this.props.onChange.bind(this)}></input>
                                {formState.activeInfo.nameValidationBox ? <NameValidationBox validationState={formState.ValidationText.NameTexts} />: null}
                                
                            </div> 
                            <div>
                                <span>EMAIL</span>
                                {formState.emailValidationSuccess? <i class="fas fa-check-circle successCheck"></i>: <InfoButton activeInfo={this.props.activeInfo} name="emailValidationBox"/>}
                                <input name="email" type="email" value= {formState.email} onChange={this.props.onChange.bind(this)}></input>
                                {formState.activeInfo.emailValidationBox ? <EmailValidationBox validationState={formState.ValidationText.EmailTexts} />: null}
                            </div>
                            <div>
                                <span>PASSWORD</span>
                                {formState.passwordValidationSuccess? <i class="fas fa-check-circle successCheck"></i>: <InfoButton activeInfo={this.props.activeInfo} name="passwordValidationBox"/>}
                                <input name="password" type="password" value= {formState.password} onChange={this.props.onChange.bind(this)}></input>
                                {formState.activeInfo.passwordValidationBox ? <PasswordValidationBox validationState={formState.ValidationText.PasswordTexts}/>: null}
                            </div>

                            <button type="Submit">SIGN IN</button>
                        </form>
                        <div className="forgotPasswordContainer">
                            <small>Forgot Password?</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

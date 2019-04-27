import React from 'react'
import { FormErrors } from './formError'

class Login extends React.Component {
  Name = this.props.name;
  Email = this.props.email;
  Password = this.props.password;
  Phone = this.props.phone;
  typeName = this.props.typeName
  typeEmail = this.props.typeEmail;
  typePhone = this.props.typePhone;
  typePassword = this.props.typePassword;

  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      password: '',
      phone: '',
      formErrors: { fullname: '', email: '', password: '', phone: '' },
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      phoneValid: false,
      formValid: false
    }
  }

  //this function will receive the name and value from the login and signup form
  handleUserInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
  }

  //this function is used to validate the fields using fieldname
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let phoneValid = this.state.phoneValid;

    switch (fieldName) {
      case 'fullname':
        nameValid = value.match(/^[a-zA-Z ]+$/);
        fieldValidationErrors.fullname = nameValid ? '' : ' is invalid';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/);
        fieldValidationErrors.password = passwordValid ? '' : ' is not valid,it should contain 1 special character,lowercase letter and uppercase letter';
        break;
      case 'phone':
        phoneValid = value.match(/^[0-9]{10}$/);
        fieldValidationErrors.phone = phoneValid ? '' : ' must contain 10 digits';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid,
      passwordValid: passwordValid,
      phoneValid: phoneValid,
    }, this.validateForm);
  }

  // this function is called and check the validity login and signup form.If condition is true the submit button is enabled
  validateForm() {
    this.setState({
      loginValid: this.state.emailValid && this.state.passwordValid,
      signupValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid && this.state.phoneValid
    });
  }

  render() {
    return (

      <div className="body">
        <form className="form-group login">
          <div>
            <div className="panel">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="row">
              <div className="col-sm-3">E-mail:</div>
              <div className="col-sm-9">
                <input className="form-control" value={this.state.email} type={this.typeEmail} name="email" placeholder="Enter Your Email" onChange={this.handleUserInput} />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-3">Password:</div>
              <div className="col-sm-9">
                <input className="form-control" value={this.state.password} type={this.typePassword} name="password" placeholder="Enter your Password" onChange={this.handleUserInput} />
              </div>
            </div>
            <div ><button className="btn btn-primary" type="button" disabled={!this.state.loginValid}>Submit</button></div>

          </div>
        </form>
      </div>

    )
  }
}

class Signup extends Login {
  render() {
    return (
      <div>
        <form className="form-group  signup" >
          <div>
            <div className="panel">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="row">
              <div className="col-sm-3">Fullname:</div>
              <div className="col-sm-9">
                <input className="form-control" value={this.state.fullname} type={this.typeName} name="fullname" placeholder="Enter your name" onChange={this.handleUserInput} />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">E-mail:</div>
              <div className="col-sm-9">
                <input className="form-control" value={this.state.email} type={this.typeEmail} name="email" placeholder="Enter your Email" onChange={this.handleUserInput} />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">Password:</div>
              <div className="col-sm-9">
                <input className="form-control" value={this.state.password} type={this.typePassword} name="password" placeholder="Enter your Password" onChange={this.handleUserInput} />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">Phone:</div>
              <div className="col-sm-9">
                <input className="form-control" value={this.state.phone} type={this.typePhone} name="phone" placeholder="Enter your phone no." onChange={this.handleUserInput} />
              </div>
            </div>
            <div className="row">
              <button className="btn btn-primary" type="button" disabled={!this.state.signupValid}>Submit</button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}
export {
  Login,
  Signup
}
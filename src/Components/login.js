import React from 'react'
import { Login, Signup } from './Generalcompo/general'

class Form extends React.Component {
    name = 'fullname';
    email = 'email';
    password = 'password';
    phone = 'phone';
    typeText = 'text';
    typeNumber = 'number';
    typePassword = 'password';

    constructor(props) {
        super(props);
        this.state = {
            isToggleLogin: 'true', //bydefault the login form is displayed
            isToggleSignup: ''
        }
    }
    login = (e) => {
        this.setState(state => ({
            isToggleSignup: false,
            isToggleLogin: true
        }))
    }

    register = (e) => {
        this.setState(state => ({
            isToggleLogin: false,
            isToggleSignup: true
        }))
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.login}>Login</button>
                <button className="btn btn-primary space" onClick={this.register}>Signup</button>
                {
                    this.state.isToggleLogin && <div>
                        <Login email={this.email} typeEmail={this.typeText} password={this.password} typePassword={this.typePassword} />
                    </div>
                }
                {
                    this.state.isToggleSignup && <div>
                        <Signup name={this.name} typeName={this.typeText}
                            email={this.email} typeEmail={this.typeText}
                            password={this.password} typePassword={this.typePassword}
                            phone={this.phone} typePhone={this.typeNumber} />
                    </div>
                }
            </div>
        )
    }
}

export default Form;
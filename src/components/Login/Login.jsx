import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            password: '',
            isLoggedin: false
        }
    }
    // setState
    onIdChange = (event) => {
        this.setState({id: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }
    submitLogIn = () => {
        this.setState({isLoggedin: true})
        // App.js 로 this.state 전달
        // ??
    }

    render() {
        console.log('STATE :', this.state)
        return(
            <div>
                <h3> LOGIN PAGE</h3>
                <div className="id" >
                    <b>ID : </b>
                    <input type="id" id="id-input" placeholder="ckstack" onChange={this.onIdChange}/>
                </div>
                <div className="password">
                    <b>PW : </b>
                    <input type="id" id="id-input" placeholder="1234" onChange={this.onPasswordChange}/>
                </div>

                <div className="submit">
                    <input type="submit" value="submit" onClick={this.submitLogIn} />
                </div>
            </div>
        )
    }
}

export default Login;
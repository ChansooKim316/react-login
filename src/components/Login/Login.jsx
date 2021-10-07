import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    // setState
    submitSignIn = () => {

    }

    // enter key listener -> 엔터 안먹힐 경우

    render() {
        return(
            <div>
                <h3> LOGIN PAGE</h3>
                <div className="id" >
                    <b>ID : </b>
                    <input type="id" id="id-input" placeholder="ckstack"/>
                </div>
                <div className="password">
                    <b>PW : </b>
                    <input type="id" id="id-input" placeholder="1234"/>
                </div>

                <div className="submit">
                    <input type="submit" value="submit" />
                </div>
            </div>
        )
    }
}

export default Login;
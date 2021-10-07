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
    loginSubmit = () => {
        // 아이디 비번체크 : 맞으면 아래 로직 수행
        // this.setState({isLoggedin: true});  // 실행시 isLoggedin 이 수정 안된채로 App.js 로 전달됨.
        this.state.isLoggedin = true;
        this.props.onLoginStatusChange(this.state); // App.js 로 this.state 전달
    }

    render() {
        return(
            <div>
                <h3>CKPUSH4</h3>
                <div className="id" >
                    {/*<b>ID : </b>*/}
                    <input type="id" id="id-input" placeholder="sjkim@ckstack.com" onChange={this.onIdChange}/>
                </div>
                <div className="password">
                    {/*<b>PW : </b>*/}
                    <input type="password" id="pw-input" placeholder="abcd1234" onChange={this.onPasswordChange}/>
                </div>

                <div className="submit">
                    <input type="submit" id="submit" value="로그인" onClick={this.loginSubmit} />
                </div>
            </div>
        )
    }
}

export default Login;
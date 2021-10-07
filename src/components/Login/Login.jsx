import React, { Component } from 'react'
import './Login.css'

const userInfo = {
    id: 'ckstack',
    pw: 1234
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: null,
            isLoggedin: false
        }
    }

    onIdChange = (event) => {
        this.setState({id: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({pw: Number(event.target.value)}) // 정수로 타입변환 필요 !
    }

    validateUserInfo = (id, pw) => {
        //맞으면 트루, 틀리면 alert
        if (this.state.id === userInfo.id && this.state.pw === userInfo.pw) {
            return true
        } else {
            alert('Invalid ID or Password')
        }
    }

    loginSubmit = () => {
        // 아이디, 비번이 맞으면 아래 로직 수행
        if (this.validateUserInfo(this.state.id, this.state.pw)) {
            // this.setState({isLoggedin: true});  // 실행시 isLoggedin 이 수정 안된채로 App.js 로 전달됨.
            this.state.isLoggedin = true;
            this.props.onLoginStatusChange(this.state); // App.js 로 this.state 전달
        } else {
            return
        }
    }

    render() {
        console.log('LOGIN.JSX - CURRENT STATE :', this.state)
        return(
            <div>
                <h3>CKPUSH4</h3>
                <div className="id" >
                    {/*<b>ID : </b>*/}
                    <input type="id" id="id-input" placeholder="ckstack" onChange={this.onIdChange}/>
                </div>
                <div className="password">
                    {/*<b>PW : </b>*/}
                    <input type="password" id="pw-input" placeholder="1234" onChange={this.onPasswordChange}/>
                </div>

                <div className="submit">
                    <input type="submit" id="submit" value="로그인" onClick={this.loginSubmit} />
                </div>
            </div>
        )
    }
}

export default Login;
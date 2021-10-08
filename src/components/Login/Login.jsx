import React, { Component } from 'react'
import './Login.css'

const userInfo = {
    id: 'ckstack',
    pw: '1234'
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            pw: '',
            isLoggedin: null,
            toggle: true
        }
    }

    onIdChange = (event) => {
        this.setState({id: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({pw: event.target.value})
    }

    validateUserInfo = (id, pw) => {
        //맞으면 트루, 틀리면 alert
        if (id === userInfo.id && pw === userInfo.pw) {
            return true
        } else {
            alert('Invalid ID or Password')
        }
    }

    loginSubmit = () => {
        // 아이디, 비번이 맞으면 아래 로직 수행
        if (this.validateUserInfo(this.state.id, this.state.pw)) {
            this.setState({isLoggedin: true});  // 1번째 클릭시 isLoggedin 이 변경안됨. 2번째 클릭시 변경됨.
            console.log('LOGIN.JSX - LOGGEDIN TRUE? :', this.state) // isLoggedin 안바뀌어있음.
            this.props.onLoginStatusChange(); // App.js 에서 isLoggedin 을 true 로 바꾸도록 호출.
        } else {
            return
        }
        console.log('SUBMIT FUNC FINISHED')
    }

    // toggle = () => {
    //     this.setState({toggle: !this.state.toggle})
    // }

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
                    <input type="submit" id="submit" value="로그인" onClick={() => {
                        console.log('-------- 로그인 CLICKED --------')
                        this.loginSubmit()
                    }} />
                </div>
                {/*<button type="button" onClick={() => {this.toggle()}}>TOGGLE BUTTON</button>*/}
            </div>
        )
    }
}

export default Login;
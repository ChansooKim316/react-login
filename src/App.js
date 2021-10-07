import React from 'react';
import Login from './components/Login/Login';
import Page1 from './components/Page_1/Page_1';
import Page2 from './components/Page_2/Page_2';
import Sidebar from "./components/Sidebar/Sidebar";
import {Component} from "react";
import "./App.css"


const initialState = {
    isLoggedin: false,
    currPage: null
}

// 아이디 비번

class App extends Component {

    constructor() {
        super();
        this.state = initialState;
    }

    validateUserInfo = (id, pw) => {

    }

    onLoginStatusChange = (data) => {
        // 여기서 아이디 비번 체크 ?
        this.setState({isLoggedin: data.isLoggedin})
        this.setState({currPage: 'page1'})
    }

    render() {
        const currPage = this.state.currPage;
        console.log('APP.JS - CURRENT STATE :', this.state); //true
        if(this.state.isLoggedin) {
            console.log('NOW LOGGED IN !!!')
        }
        if (!this.state.isLoggedin) {
            return <Login onLoginStatusChange={this.onLoginStatusChange}/>
        }
        switch (currPage) {
            case 'page1' :
                return (
                    <div className="container">
                        <div className="sideBar">
                            <Sidebar/>
                        </div>
                        <div className="page1">
                            <Page1 />
                        </div>
                    </div>
                );
            case 'page2' :
                return (
                    <div className="container">
                        <div className="sideBar">
                            <Sidebar/>
                        </div>
                        <div className="page2">
                            <Page2 />
                        </div>
                    </div>
                )
            // 이후 다른 페이지들 추가 가능
            default :
                return '<h3>Something went wrong. Please try again</h3>'
        }
    }
}

export default App;

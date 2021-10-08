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

    onLoginStatusChange = (data) => {
        this.setState({isLoggedin: data.isLoggedin})
        this.setState({currPage: 'page1'})
    }

    onPageChange = (data) => {
        this.setState({currPage: data.currPage})
    }

    render() {
        const currPage = this.state.currPage;
        console.log('APP.JS - CURRENT STATE :', this.state); //true
        if (!this.state.isLoggedin) {
            return <Login onLoginStatusChange={this.onLoginStatusChange}/>
        }
        switch (currPage) {
            case 'page1' :
                return (
                    <div className="container">
                        <div className="wrapper-sidebar">
                            <Sidebar onPageChange={this.onPageChange}/>
                        </div>
                        <div className="wrapper-page1">
                            <Page1 />
                        </div>
                    </div>
                );
            case 'page2' :
                return (
                    <div className="container">
                        <Sidebar onPageChange={this.onPageChange}/>
                        <Page2 />
                    </div>
                )
            default :
                return '<h3>Something went wrong. Please try again</h3>'
        }
    }
}

export default App;

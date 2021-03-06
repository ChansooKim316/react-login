import React from 'react';
import Login from './components/Login/Login';
import Page1 from './components/Page_1/Page_1';
import Page2 from './components/Page_2/Page_2';
import Sidebar from "./components/Sidebar/Sidebar";
import {Component} from "react";
import "./App.css"


class App extends Component {

    constructor() {
        super();
        this.state = {
            isLoggedin: false,
            currPage: null
        };
    }

    onLoginStatusChange = (data) => {
        // console.log('DATA.ISLOGGEDIN :', data.isLoggedin);
        // this.setState({isLoggedin: data.isLoggedin})
        this.setState({isLoggedin: true});
        console.log('APP.JS - LOGGED IN? :', this.state) // 여전히 FALSE
        this.setState({currPage: 'page1'})
    }

    onPageChange = (data) => {
        console.log('DATA FROM SIDEBAR :', data)
        this.setState({currPage: data})
        console.log('PAGE CHNGED ? :', this.state)
    }

    render() {
        const currPage = this.state.currPage;
        console.log('APP.JS - CURRENT STATE :', this.state);
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
                        <div className="wrapper-pages">
                            <Page1 />
                        </div>
                    </div>
                );
            case 'page2' :
                return (
                    <div className="container">
                        <div className="wrapper-sidebar">
                            <Sidebar onPageChange={this.onPageChange}/>
                        </div>
                        <div className="wrapper-pages">
                            <Page2 />
                        </div>
                    </div>
                )
            default :
                return '<h3>Something went wrong. Please try again</h3>'
        }
    }
}

export default App;

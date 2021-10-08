import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    constructor(props) {
        super();
        this.state = {
            currPage: 'page1'
        }
    }

    movePage = (destination) => {
        console.log('DESTINATION :', destination)
        this.setState({currPage:destination})
        // this.state.currPage = destination; // state 변경하고 넘기지 않고 page 정보만 넘긴후 App.js 에서 state 변경하게 함.
        this.props.onPageChange(destination) // App.js 로 destination(목적지 페이지) 넘겨주기
        console.log('CHANGED STATE :', this.state)
    }

    render() {
        return(
            <div className="sidebar">
                {/*<div className="wrapper">*/}
                    <div className="title">
                        CKPUSH4
                    </div>
                    <div className="all-menus">
                        <div className="buttons">
                            <button type="button" onClick={() => {this.movePage("page1")}} >PAGE 1</button>
                        </div>
                        <div className="buttons">
                            <button type="button" onClick={() => {this.movePage("page2")}} >PAGE 2</button>
                        </div>
                    </div>
                {/*</div>*/}
            </div>
        )
    }
}

export default Sidebar;
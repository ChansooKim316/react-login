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
        // this.setState({currPage:destination})
        this.state.currPage = destination;
        // 2회 이상 클릭시 TypeError: this.props.onPageChange is not a function 발생
        this.props.onPageChange(this.state)
        console.log('CHANGED STATE :', this.state)
    }

    render() {
        return(
            <div className="sideBar">
                <div id="title">
                    CKPUSH4
                </div>
                <div className="all-menus">
                    <div id="menu1">
                        <button type="button" onClick={() => {this.movePage("page1")}} >PAGE 1</button>
                    </div>
                    <div id="menu2">
                        <button type="button" onClick={() => {this.movePage("page2")}} >PAGE 2</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;
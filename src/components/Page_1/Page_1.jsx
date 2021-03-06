import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import Table from '../Table/Table'
import './Page_1.css'
import userData from "../../user_data/user_data";


class Page_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            showTable: false
        }
    }

    onFilterConditionChange = (data) => {
        // console.log('PAGE1.JSX - GIVEN STATE :', data)
        this.setState({name: data.name});
        this.setState({age: data.age});
        // this.setState({showTable: data.showTable}); // showTable 변경이 안된채로 넘겨지므로 주석처리
        this.setState({showTable: true});
        console.log('PAGE1.JSX - CHANGED STATE :', this.state) // setState 사용시 state 변경이 안되어있음
    }

    filterUserData = (data) => {
        // console.log('BEFORE FILTERING', data)
        const result = [];
        const searchName = this.state.name;
        const searchAge = this.state.age;
        console.log('SEARCH AGE :', searchAge)
        // 이름조건 검색
        for (let i = 0; i < data.length; i++) {
            // 나이 입력 없을시 이름조건으로만 검색
            if (!searchAge) {
                if (data[i].name.includes(searchName) ) {
                    result.push(data[i])
                }
            } else {
                if (data[i].age === searchAge && data[i].name.includes(searchName) ) {
                    result.push(data[i])
                }
            }
        }

        console.log('SEARCH RESULT :', result)
        return result
    }

    render() {
        // console.log('USER DATA :', userData)
        console.log('PAGE1.JSX - STATE :', this.state)
        if (!this.state.showTable) {
            return(
                <div className="page1">
                    <b>PAGE 1</b>
                    <Filter onFilterConditionChange={this.onFilterConditionChange}/>
                    (조건 미입력시 데이터 전체 출력)
                    <br/><br/>
                </div>
            )
        } else if (this.state.showTable){
            return (
                <div className="page1">
                    <b>PAGE 1</b>
                    <Filter onFilterConditionChange={this.onFilterConditionChange}/>
                    <Table result={this.filterUserData(userData)}/>
                </div>
            )
        }
    }
}

export default Page_1;
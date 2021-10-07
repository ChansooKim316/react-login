import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import Table from '../Table/Table'
import './Page_1.css'
import userData from "../../user_data/user_data";


// const filterUserData = (data) => {
//     console.log('BEFORE FILTERING', data)
//     const result = [];
//     const searchName = this.state.name;
//     const searchAge = this.state.age;
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].includes(searchName)) {
//             result.push(data[i])
//         }
//     }
//     console.log('RESULT :', result)
//     return
// }

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
        this.setState({showTable: data.showTable});
        console.log('PAGE1.JSX - CHANGED STATE :', this.state) // setState 사용시 state 변경이 안되어있음
    }

    filterUserData = (data) => {
        // console.log('BEFORE FILTERING', data)
        const result = [];
        const searchName = this.state.name;
        const searchAge = this.state.age;
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.includes(searchName)) {
                result.push(data[i])
            }
        }
        console.log('RESULT :', result)
        return result
    }

    render() {
        // console.log('USER DATA :', userData)
        console.log('PAGE1.JSX - STATE :', this.state)
        if (!this.state.showTable) {
            return(
                <div className="page1">
                    <h3>PAGE 1</h3>
                    <Filter onFilterConditionChange={this.onFilterConditionChange}/>
                    검색 후 테이블 출력
                </div>
            )
        } else if (this.state.showTable){
            // 검색조건에 맞는 사용자 거르기
            // this.filterUserData(userData)
            // table 컴포넌트에 걸러진 사용자 전달


            return (
                <div className="page1">
                    <h3>PAGE 1</h3>
                    <Filter onFilterConditionChange={this.onFilterConditionChange}/>
                    <Table result={this.filterUserData(userData)}/>
                </div>
            )
        }
    }
}

export default Page_1;
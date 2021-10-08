import React, { Component } from "react";


class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null,
            // showTable: false
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onAgeChange = (event) => {
        this.setState({age: Number(event.target.value)})
    }

    submitFilterData = () => {
        // this.setState({showTable: true}) // state 변경이 안된채로 전달돼서 아래 로직 사용
        // this.state.showTable = true;
        this.props.onFilterConditionChange(this.state) // Page1.jsx 로 필터정보 전달
    }


    render() {
        console.log('FILTER.JSX - STATE :',this.state)
        return (
            <div>
                <br/>
                <label >이름 : </label>
                <input type="text" id="name" onChange={this.onNameChange}/><br/>
                <label >나이 : </label>
                <input type="number" id="age" onChange={this.onAgeChange}/><br/>
                <br/>
                <input type="submit" value="검색" onClick={() => { this.submitFilterData() }} />
                <br/><br/>
            </div>
        )
    }
}

export default Filter;
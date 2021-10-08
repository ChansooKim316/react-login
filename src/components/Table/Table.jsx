import React, { Component } from "react";
import Login from "../Login/Login";


class Table extends Component {

    dataToTable = (data) => {
        const headers =
            <tr>
                <th>번호</th>
                <th>이름</th>
                <th>나이</th>
                <th>성별</th>
            </tr>;
        let rows = [];
        for (let user of data.result) {
            rows.push(
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.sex}</td>
                </tr>
            )
        }

        return <table>
                    <tbody>
                        {headers}
                        {rows}
                    </tbody>
                </table>

    }

    render() {
        const filteredUserData = this.props;
<<<<<<< HEAD
        console.log('GIVEN USER DATA :', filteredUserData)

        return (
            <div>
                TABLE COMPONENT
=======
        return (
            <div>
                {this.dataToTable(filteredUserData)}
>>>>>>> page1
            </div>
        )
    }
}

export default Table;
import React, { Component } from "react";

class Table extends Component {
    render() {
        const filteredUserData = this.props;
        console.log('GIVEN USER DATA :', filteredUserData)
        return (
            <div>
                TABLE COMPONENT
                <p>----- table -----</p>
                <table>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>성별</th>
                    </tr>
                    {/*{filteredUserData.map(data => (*/}
                    {/*    <tr>*/}
                    {/*        <td>{data.id}</td>*/}
                    {/*        <td>{data.name}</td>*/}
                    {/*        <td>{data.age}</td>*/}
                    {/*        <td>{data.sex}</td>*/}
                    {/*    </tr>*/}
                    {/*))}*/}
                </table>
            </div>
        )
    }
}

export default Table;
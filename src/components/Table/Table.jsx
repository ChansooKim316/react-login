import React, { Component } from "react";


class Table extends Component {
    render() {
        const filteredUserData = this.props;
        console.log('GIVEN USER DATA :', filteredUserData)

       const userDataToTable = (data) => {
           console.log('func called')
           // 항목들 (첫째줄)
           const title =
               <tr>
                   <th>번호</th>
                   <th>이름</th>
                   <th>나이</th>
                   <th>성별</th>
               </tr>
           // 요소들
           const items =
           <tr>
               <td>data[0].id</td>
               <td>data[0].name</td>
               <td>data[0].age</td>
               <td>data[0].sex</td>
           </tr>
           <tr>
               <td>data[1].id</td>
               <td>data[1].name</td>
               <td>data[1].age</td>
               <td>data[1].sex</td></tr>


           return <div><table>{title}{items}</table></div>
        }
        return (

            <div>
                TABLE COMPONENT
                {userDataToTable()}
                {/*<table>*/}
                {/*    <tr>*/}
                {/*        <th>번호</th>*/}
                {/*        <th>이름</th>*/}
                {/*        <th>나이</th>*/}
                {/*        <th>성별</th>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>data[0].id</td>*/}
                {/*        <td>data[0].name</td>*/}
                {/*        <td>data[0].age</td>*/}
                {/*        <td>data[0].sex</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>data[1].id</td>*/}
                {/*        <td>data[1].name</td>*/}
                {/*        <td>data[1].age</td>*/}
                {/*        <td>data[1].sex</td>*/}
                {/*    </tr>*/}
                {/*</table>*/}
            </div>
        )
    }
}

export default Table;
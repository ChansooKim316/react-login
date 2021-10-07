import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import Table from '../Table/Table'
import './Page_1.css'
import userData from "../../user_data/user_data";


class Page_1 extends Component {
    render() {
        console.log('USER DATA :', userData)
        return(
            <div className="page1">
                <h3>PAGE 1</h3>
                <Filter />
                <Table />
            </div>

        )
    }
}

export default Page_1;
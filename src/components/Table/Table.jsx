import React, { Component } from "react";


class Table extends Component {
    render() {
        const filteredUserData = this.props;
        console.log('GIVEN USER DATA :', filteredUserData)

        return (
            <div>
                TABLE COMPONENT
            </div>
        )
    }
}

export default Table;
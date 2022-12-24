import React, { Component } from "react";

export default class ChairInfo extends Component {
    render() {
        console.log(this.props)
        return (
            <>
                <tr>
                    <td>{this.props.soGhe}</td>
                    <td>{this.props.gia}</td>
                </tr>
            </>
        );
    }
}

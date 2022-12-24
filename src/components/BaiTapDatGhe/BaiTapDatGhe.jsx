import React, { Component } from "react";
import { connect } from "react-redux";
import chairList from "../../data/danhSachGhe.json";
import Chair from "./Chair";
import ChairInfo from "./ChairInfo";

import "./style.scss";

class BaiTapDatGhe extends Component {
    renderContent = () => {
        // console.log(this.props.seat_data);
        // console.log(this.props.seat_info)
        return this.props.seat_data.map((ele) => {
            return (
                <div key={ele.hang}>
                    <div className="seat">{ele.hang}</div>
                    {ele.danhSachGhe.map((chair, idx) => {
                        return (
                            <Chair
                                key={chair.soGhe}
                                hang={ele.hang}
                                name={idx + 1}
                                dangChon={chair.dangChon}
                                daDat={chair.daDat}
                                gia={chair.gia}
                                soGhe={chair.soGhe}
                            />
                        );
                    })}
                </div>
            );
        });
    };

    renderSeatInfo = () => {
        return this.props.seat_info.map((element) => {
            console.log(element.hang);
            return (
                <ChairInfo
                    key={element.soGhe}
                    soGhe={element.soGhe}
                    gia={element.gia}
                ></ChairInfo>
            );
        });
    };

    calculateTotal = () => {
        const total = this.props.seat_info.reduce((total, element) => {
            total += element.gia;
            return total;
        }, 0);
        return total;
    };

    bookSeat = () => {
        console.log(this.props.seat_info)
        this.props.dispatch({
            type: "BOOK_SEAT",
            payload: this.props.seat_info
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-8">{this.renderContent()}</div>
                <div className="col-4">
                    <h3 className="mt-5 text-white text-center">
                        YOUR SELECTED SEATS
                    </h3>
                    <div className="legends">
                        <div className="row">
                            <div className="col-2 pr-0 mt-1">
                                <i className="seat-square fa-solid fa-square reserved">
                                    {" "}
                                </i>
                            </div>
                            <div className="col-10 pl-0">
                                <h3 className="seat-desc">RESERVED SEATS</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 pr-0 mt-1">
                                <i className="seat-square fa-solid fa-square selected">
                                    {" "}
                                </i>
                            </div>
                            <div className="col-10 pl-0">
                                <h3 className="seat-desc">SELECTED SEATS</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 pr-0 mt-1">
                                <i className="seat-square fa-solid fa-square available-s">
                                    {" "}
                                </i>
                            </div>
                            <div className="col-10 pl-0">
                                <h3 className="seat-desc">AVAILABLE SEATS</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h6 style={{fontStyle: 'italic'}} className="text-white mt-5">Please click on the selected seats to remove them</h6>
                        <table className="seat-info mt-1">
                            <tbody>
                                <tr>
                                    <th>Seat Number</th>
                                    <th>Price</th>
                                </tr>
                                {this.renderSeatInfo()}
                                <tr>
                                    <td>Total</td>
                                    <td>{this.calculateTotal()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="confirm-btn mt-5">
                        <button onClick={this.bookSeat} className="btn btn-primary">Confirm</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seat_data: state.seatReducer.seat_data,
        seat_info: state.seatReducer.seat_info,
    };
};

export default connect(mapStateToProps)(BaiTapDatGhe);

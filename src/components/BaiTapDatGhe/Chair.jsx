import React, { Component } from "react";
import { connect } from "react-redux"

class Chair extends Component {
  
  mappingClass = () => {

    const { hang, dangChon, daDat } = this.props;

    if (dangChon) {
      return "selected";
    }

    if (!hang) {
      return "number";
    }

    if (daDat) {
      return "booked";
    }

    if (!daDat) {
      return "available";
    }
  };

  updateSeatStatus = () => {
    const { hang, name, dangChon, daDat, gia} = this.props;
    // console.log(this.props)
    if (!daDat) {
      this.props.dispatch({
        type: 'UPDATE_SEAT_STATUS',
        payload: this.props
      })
    }
    else {
      alert('The seat has been booked. Please select other seats')
    }

  }

  render() {
    return (
      <div onClick={this.updateSeatStatus} className={`chair ${this.mappingClass()}`}>{this.props.name}</div>
    );
  }
}


export default connect()(Chair);
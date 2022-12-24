import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      like: 0,
      isShowChildComponent: true,
    };

    // console.log("[PARENT] constructor");
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    // console.log("[PARENT] getDerivedStateFromProps");

    // console.log({
    //   nextProps,
    //   currentState,
    // });

    // console.log(this, '---this---')

    // if (true) {
    //   currentState.number = 10;
    // }

    return currentState;
  }

  render() {
    // console.log("[PARENT] render");

    return (
      <div className="bg-warning p-5 mt-2 text-center w-75 mx-auto">
        <h4>Parent</h4>
        <div className="my-2">
          <button
            onClick={() => this.setState({ number: this.state.number - 1 })}
            className="btn btn-primary"
          >
            Decrease
          </button>
          <button
            onClick={() => this.setState({ number: this.state.number + 1 })}
            className="btn btn-success"
          >
            Increase
          </button>
          <button
            onClick={() => this.setState({ like: this.state.like + 1 })}
            className="btn btn-danger"
          >
            Increase Like
          </button>
          <button
            onClick={() =>
              this.setState({
                isShowChildComponent: !this.state.isShowChildComponent,
              })
            }
            className="btn btn-dark"
          >
            Toggle show/hide child component
          </button>
        </div>

        {this.state.isShowChildComponent && (
          <Child number={this.state.number} />
        )}
      </div>
    );
  }

  componentDidMount() {
    // console.log("[PARENT] componentDidMount");
    // call api hoặc là xử lý logic sau render
  }
}

// class A {
//   static getValue() {}

//   getObject() {}
// }

// A.getValue();

// const instance = new A();

// instance.getObject();

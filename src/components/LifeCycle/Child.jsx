import React, { Component, PureComponent } from "react";

// tham trị: string, number, null ... ( PureComponent mới detect đc)
// tham chiếu : array , object ( { number: { number: 1 }} )

export default class Child extends Component {
  // export default class Child extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.pRef = React.createRef();

    this.timeout = setInterval(() => {
      console.log("Socket is running...");
    }, 1000);

    console.log("[CHILD] constructor");
  }

  static getDerivedStateFromProps(nextProps, currentState) {
    console.log("[CHILD] getDerivedStateFromProps");

    // console.log({ nextProps, currentState });
    // currentState.number = nextProps.number;

    return currentState;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[CHILD] shouldComponentUpdate");

    // console.log({
    //   nextProps,
    //   nextState,
    //   previousProps: this.props,
    // });

    if (nextProps.number === this.props.number) {
      return false;
    }

    return true;
  }

  render() {
    console.log("[CHILD] render");

    return (
      <div className="bg-light text-center p-5">
        <h4>Child</h4>
        <p ref={this.pRef}>{this.props.number}</p>
      </div>
    );
  }

  getSnapshotBeforeUpdate(previousProps, previousState) {
    console.log("[CHILD] getSnapshotBeforeUpdate");

    // previous dom or ref
    // console.log(this.pRef.current.innerHTML);

    return this.pRef.current.innerHTML;
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    console.log("[CHILD] componentDidUpdate");

    // console.log({
    //   previousProps,
    //   previousState,
    //   snapshot,
    // });

    if (previousProps.number === 5) {
      // call api
      // dispatch action

      console.log("----------running-------------");
    }
  }

  componentDidMount() {
    console.log("[CHILD] componentDidMount");
  }

  componentWillUnmount() {
    console.log("[CHILD] componentWillUnmount");

    clearInterval(this.timeout);
  }
}

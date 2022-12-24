// rcc
import React, { Component } from "react";

import { connect } from "react-redux";
import { addVocabularyAction } from "../../store/actions/vocabularyAction";

class Form extends Component {
  constructor(props) {
    super(props);

    // creatRef dùng để lưu trữ dữ liệu hoặc dùng để dom trực tiếp đến 1 thẻ jsx
    this.enInputRef = React.createRef();
    this.viInputRef = React.createRef();
  }

  addVocabulary = () => {
    const en = this.enInputRef.current.value;
    const vi = this.viInputRef.current.value;

    console.log("en", en);
    console.log("vi", vi);

    this.props.dispatch(addVocabularyAction({ en, vi }));
  };

  render() {
    // console.log(this.props.dispatch);

    return (
      <section>
        <div className="form-group">
          <input
            ref={this.enInputRef}
            placeholder="En"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            ref={this.viInputRef}
            placeholder="Vi"
            type="text"
            className="form-control"
          />
        </div>
        <button onClick={this.addVocabulary} className="btn btn-primary w-100">
          SAVE
        </button>
        <hr />
      </section>
    );
  }
}

export default connect()(Form);

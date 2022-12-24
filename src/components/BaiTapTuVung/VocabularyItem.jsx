import React, { Component } from "react";
import { connect } from "react-redux";
import { removeVocabularyAction } from "../../store/actions/vocabularyAction";

class VocabularyItem extends Component {
  updateFavorite = () => {
    this.props.dispatch({
      type: "UPDATE_FAVORITE",
      payload: this.props.element,
    });
  };

  removeVocabulary = () => {
    this.props.dispatch(removeVocabularyAction(this.props.element));
  };

  render() {
    console.log("VocabularyItem is rendering...");

    const { vi, en, isFavorited } = this.props.element;

    return (
      <div className="border p-3 mb-2" onDoubleClick={this.removeVocabulary}>
        <div className="content">
          <div className="d-flex justify-content-between">
            <h5 className="font-weight-bold">{en}</h5>
            {isFavorited ? (
              <i
                onClick={this.updateFavorite}
                className="fa-solid fa-heart text-danger"
              />
            ) : (
              <i
                onClick={this.updateFavorite}
                className="fa-regular fa-heart"
              ></i>
            )}
          </div>
          <p className="mb-0">{vi}</p>
        </div>
      </div>
    );
  }
}

export default connect()(VocabularyItem);

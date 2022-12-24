import React, { Component } from "react";

import { connect } from "react-redux";
import VocabularyItem from "./VocabularyItem";

class VocabularyTab extends Component {
  renderContent = () => {
    const filteredData = this.props.vocabularyList.filter((element) => {
      if (this.props.isOnlyFavorited) {
        return element.isFavorited === true;
      }

      return true;
    });

    return filteredData.map((element) => {
      return <VocabularyItem key={element.id} element={element} />;
    });
  };

  render() {
    console.log("VocabularyTab is rendering...");
    return (
      <div
        className="tab-pane fade show active"
        id="pills-vocabulary"
        role="tabpanel"
        aria-labelledby="pills-vocabulary-tab"
      >
        {this.renderContent()}
        {/* <div className="border p-3 mb-2" onDoubleClick={() => console.log(2)}>
          <div className="content">
            <div className="d-flex justify-content-between">
              <h5 className="font-weight-bold">Hat</h5>
              <i className="fa-solid fa-heart text-danger" />
            </div>
            <p className="mb-0">Mũ</p>
          </div>
        </div>
        <div className="border p-3 mb-2">
          <div className="content">
            <div className="d-flex justify-content-between">
              <h5 className="font-weight-bold">Circle</h5>
              <i className="fa-regular fa-heart"></i>
            </div>
            <p className="mb-0">Vòng tròn</p>
          </div>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vocabularyList: state.vocabularyReducer.vocabularyList,
    isOnlyFavorited: state.vocabularyReducer.isOnlyFavorited,
  };
};

export default connect(mapStateToProps)(VocabularyTab);

import React, { Component } from "react";
import { connect } from "react-redux";
import HistoryItem from "./HistoryItem";

class HistoryTab extends Component {
  renderContent = () => {
    return this.props.historyList.map((element) => {
      return <HistoryItem key={element.id} history={element} />;
    });
  };

  render() {
    return (
      <div
        className="tab-pane fade"
        id="pills-history"
        role="tabpanel"
        aria-labelledby="pills-history-tab"
      >
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    historyList: state.vocabularyReducer.historyList,
  };
};

export default connect(mapStateToProps)(HistoryTab);

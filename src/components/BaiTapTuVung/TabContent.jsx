import React, { Component } from "react";
import HistoryTab from "./HistoryTab";
import VocabularyTab from "./VocabularyTab";

export default class TabContent extends Component {
  render() {
    return (
      <div
        className="tab-content border-bottom border-top"
        id="pills-tabContent"
        style={{ height: 262, overflowX: "hidden" }}
      >
        <VocabularyTab />
        <HistoryTab />
      </div>
    );
  }
}

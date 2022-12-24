import React, { Component } from "react";
import TabContent from "./TabContent";
import TabList from "./TabList";

export default class Content extends Component {
  render() {
    return (
      <div className="mt-2">
        <TabList />
        <TabContent />
      </div>
    );
  }
}

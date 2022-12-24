import React, { Component } from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <List />
        <Footer />
      </div>
    );
  }
}

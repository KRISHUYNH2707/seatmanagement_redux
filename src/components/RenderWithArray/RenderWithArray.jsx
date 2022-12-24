import React, { Component } from "react";

export default class RenderWithArray extends Component {
  personList = [
    { id: 1, name: "Cybersoft" },
    { id: 2, name: "Su Van Hanh" },
  ];

  renderPersontList = () => {
    // const content = this.personList.map((element) => {
    //   return <p>{element.name}</p>;
    // });

    // return content;

    return this.personList.map((element) => {
      return <p key={element.id}>{element.name}</p>;
    });
  };

  render() {
    return (
      <div>
        <h3>RenderWithArray</h3>
        {/* {`<p>Man</p><p>Khai</p>`} */}
        {/* {
            [
                <p>Man</p>,
                <p>Khai</p>
            ]
        } */}
        {this.renderPersontList()}
      </div>
    );
  }
}

// INPUT: [
//     { name: 'Man' },
//     { name: 'Khai' }
// ]

// // JS OUTPUT:
// // for()
// // reduce()

// // content += `<p></p>`

// // `<p>Man</p><p>Khai</p>`

// REACT OUTPUT:

// map() [1,2] => ["1", "2"]

// [
//     <p>Man</p>,
//     <p>Khai</p>
// ]

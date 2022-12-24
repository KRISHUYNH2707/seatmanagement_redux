import React, { Component } from "react";
import ChildProps from "./ChildProps";
import ChildrenProps from "./ChildrenProps";

export default class ParentProps extends Component {
  imageUrl =
    "https://images.samsung.com/is/image/samsung/p6pim/vn/2202/gallery/vn-galaxy-a53-5g-a536-sm-a536elbgxxv-531435476?$650_519_PNG$";

  productDetail = {
    price: 3000,
  };

  // lấy dữ liệu từ thằng con ra thằng cha
  showName = (name) => {
    alert(name);
  };

  render() {
    return (
      <div>
        <h3>Props</h3>

        {/* <input className="form-control" type="text" /> */}
        <ChildProps
          name="Samsung Note 20"
          imageUrl={this.imageUrl}
          productDetail={this.productDetail}
          showName={this.showName}
        />

        <ChildProps
          name="IPhone"
          imageUrl="https://fptshop.com.vn/Uploads/Originals/2021/10/1/637686973775896947_ip-12-dd.jpg"
          productDetail={{ price: 5000 }}
          showName={this.showName}
        />

        <ChildrenProps>
          <p>Nội dung của parent props</p>

          <ChildProps
            name="IPhone"
            imageUrl="https://fptshop.com.vn/Uploads/Originals/2021/10/1/637686973775896947_ip-12-dd.jpg"
            productDetail={{ price: 5000 }}
            showName={this.showName}
          />
        </ChildrenProps>
      </div>
    );
  }
}

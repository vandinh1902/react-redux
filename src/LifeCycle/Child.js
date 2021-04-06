import React, { Component, PureComponent } from "react";

// PureComponent: React sẽ tự xử lý shouldComponentUpdate cho mình, nó sẽ tự động so sánh props hoặc state với props và state mới, nếu thay đổi sẽ reder lại, còn lại sẽ ko render lại
//  Chỉ so sánh Primitives value(string, number, boolean, null, underfined), khi so sánh object hoặc array sẽ luôn trả về
export default class Child extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: props.count * 1000,
    };
  }
  // Chạy sau khi props hoặc state thay đổi và chạy trước render
  // Nếu return về true => Chạy tiếp tục tới render
  // Nếu ruturn về false => sẽ không được chạy
  shouldComponentUpdate(nextProps, nextState) {
    // Chỉ khi props count thay đổi component mới được render lại
    if (nextProps.count !== this.props.count) {
      return true;
    }
    return false;
  }
  // Trường hợp state của component còn phụ thuộc vào props của component cha
  componentWillUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("props", this.props);
    if (prevProps.count !== this.props.count) {
      this.setState({ total: this.props.count * 1000 });
    }
  }
  render() {
    console.log("Child render lại");
    return (
      <div>
        <p>Total: {this.state.total}</p>
      </div>
    );
  }
}

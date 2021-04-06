import React, { useState, useEffect } from "react";

export default function Lifecycle() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  // Tuong duong compontntDidmout + componentDidUpdate
  // Chay moi lan sau khi render
  useEffect(() => {
    console.log("Chay sau khi render");
    console.log("count:", count);
  });
  //   Tuong duong componentDidMount
  // Chi chay 1 lan sau khi reder
  // Chu y tham so thu 2 laf 1 array rong
  useEffect(() => {
    console.log("Chay sau khi render");
    // Khu useEffect co return ve 1 function, function nay duoc chay trc khi component bi huy, tuong duong componentWillUnmount
    // Chi nen return ben trong useEffect co tham so thu 2 la 1 array rong
    return () => {
      console.log("Chay truoc khi component bi huy");
    };
  }, []);

  // Tuong duong compontntDidmout + componentDidUpdate
  //   Nhung chi chay lai sau khi render voi dieu kien gia tri cua bien count thay doi

  useEffect(() => {
    console.log('Gia tri', count);
  }, [count]);
  return (
    <div>
      <h3>Demo Count</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {/*  */}
      <h3>Demo Count1</h3>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Click 1</button>
    </div>
  );
}

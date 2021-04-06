import React, { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const [color, setColor] = useState("red");

  // state la array
  const [products, setProducts] = useState(["12 pro max", "12 mini"]);
  //  state la object
  const [form, setForm] = useState({ username: "", email: "" });
  const handleChangeColor = () => {
    const color = ["yellow", "blue", "", "", ""];
    const random = Math.floor(Math.random() * 4);
    setColor(color[random]);
  };

  const handleAddProduct = () => {
    // Cach 1
    // const products = [...products, "12 mini"]
    // setProducts(products);

    // Cach 2
    setProducts((products) => {
      return [...products, "12 mini"];
    });
  };

  const handleChange = (evt) => {
      const {name, value} = evt.target;
      setForm((form) => {
          return{
              ...form,[name]:value,
          }
      })
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Click</button>

      <h3>Demo color</h3>
      <p>Color: {color}</p>
      <button onClick={handleChangeColor}>Change Color</button>

      <h4>Demo Products</h4>
      <p>{products.join(", ")}</p>
      <button onClick={handleAddProduct}>Add product</button>

      <div className="form-group">
        <label htmlFor>User name</label>
        <input
          type="username"
          name="username"
          className="form-control"
          value={form.username}
          onChange={handleChange}
          placeholder
          aria-describedby="helpId"
        />
      </div>
      <div className="form-group">
        <label htmlFor>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={form.email}
          onChange={handleChange}
          placeholder
          aria-describedby="helpId"
        />
      </div>
    </div>
    
  );
}

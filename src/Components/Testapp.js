import React, { useState } from "react";

import './myStyle.css'


function Testapp(props) {
    let className = 'primary'
    let styleName = 'styleName'
  const [count, setCount] = useState({
    num: 1,
    
  });


  const handleAdd = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num + 1,
      };
    });
  };

  const handleSubstract = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: prev.num - 1,
      };
    });
  };

  const handleReset = () => {
    setCount((prev) => {
      return {
        ...prev,
        num: 0,
      };
    });
  };
  return (
    <div>
        <h1 className={className}>React Counter</h1>
        <span STYLE="font-size:200%">{count.num}</span>
      <br></br>
      <button STYLE="margin-right:50px" onClick={handleAdd}>+</button>

      <button onClick={handleSubstract}>-</button>
        <br></br>
        <br></br>
        <br></br>
      <button onClick={handleReset}>Reset</button>

    </div>
  );
}

export default Testapp;
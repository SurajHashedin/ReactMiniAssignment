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
    <div class="div1">
        <h1 className={className}>React Counter</h1>
        <span class="fontsize" >{count.num}</span>
      <br></br>
      <button class="styleName" onClick={handleAdd}>+</button>

      <button onClick={handleSubstract}>-</button>
        <br></br>
        <br></br>
        <br></br>
      <button class="reset" onClick={handleReset}>Reset</button>

    </div>
  );
}

export default Testapp;
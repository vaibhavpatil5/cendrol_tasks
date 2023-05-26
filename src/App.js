import React, { useState } from "react";
import ComponentA from "./ComponentA";
import "./styles.css";

const CounterButton = () => {
  const [count, setCount] = useState(1);
  const [buttonColor, setButtonColor] = useState("#fdc315");
  const [isTrue, setIsTrue] = useState(true);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickColor = () => {
    setButtonColor(getRandomColor());
  };

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "black", "#fdc315"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <strong>Task 1</strong>
      <br />
      <div className="grey_bg">
        <button
          className="Count_button"
          onClick={handleClick}
          style={{
            backgroundColor: buttonColor
          }}
        >
          <h1>{count.toString().padStart(2, "0")}</h1>
        </button>
      </div>
      <div className="Count_button2">
        <button
          onClick={handleClickColor}
          style={{ backgroundColor: buttonColor, marginBottom: "10px" }}
        >
          Change Color
        </button>
      </div>
      <hr />

      <strong>Task 2</strong>
      <br />
      <div>
        <ComponentA />
      </div>
      <hr />
      <br />
      <strong>Task 3</strong>
      <br />
      <br />
      <button onClick={() => setIsTrue(!isTrue)}>Toggle</button>
      <div>
        <button
          style={{
            backgroundColor: isTrue ? "red" : "blue",
            width: "100px",
            height: "50px",
            color: "white",
            marginTop: "10px"
          }}
        >
          Button
        </button>
      </div>
    </>
  );
};

export default CounterButton;

import React, { useState } from "react";

const ComponentB = ({ cendol }) => {
  const [value, setValue] = useState(cendol);

  const handleIncrement = () => {
    setValue(value + 10);
  };

  return (
    <div>
      <p>
        Value from Component A: <strong>{cendol}</strong>
      </p>
      <p>
        Value in Component B: <strong>{value}</strong>
      </p>
      <button onClick={handleIncrement}>Increment by 10</button>
    </div>
  );
};

export default ComponentB;

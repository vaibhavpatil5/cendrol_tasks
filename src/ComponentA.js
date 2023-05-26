import React from "react";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const cendol = 2;

  return <ComponentB cendol={cendol} />;
};

export default ComponentA;

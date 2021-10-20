import React, { createContext } from "react";
import Child4 from "./child4";

const Name = createContext();

const Child3 = () => {
  return (
    <div>
      <Name.Provider value={"Veena"}>
        <Child4 />
      </Name.Provider>
    </div>
  );
};

export default Child3;
export { Name };

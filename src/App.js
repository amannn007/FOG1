import React from "react";
import RainGrid from "./RainGrid";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white", marginTop: "20px" }}>
        Dynamic Rain Grid
      </h1>
      <RainGrid rows={15} columns={20} />
    </div>
  );
};

export default App;

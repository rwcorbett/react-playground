import React, { FC } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";

// this is implicitly typed as a React.JSX.Element,
const App = () => {
  return (
    <>
      <Header title="Playground App" />
      <main>
        <Listing className="p-11" />
      </main>
    </>
  );
}

export default App;
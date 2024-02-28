import React, { FC, useState } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";
import ShowListBtn from "./components/ShowListButton";

const handleClick = () => {
  console.info("Click");
}

// this is implicitly typed as a React.JSX.Element,
const App = () => {
  return (
    <>
      <Header title="Playground App" />
      <main>
        <ShowListBtn handleClick={handleClick} />
        <Listing className="p-11" />
      </main>
    </>
  );
}

export default App;
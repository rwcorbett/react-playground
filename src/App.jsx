import React, { FC, useState } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";
import ButtonShowHide from "./components/ButtonShowHide";
import SuspendMe from "./components/SuspendMe";

// this is implicitly typed as a React.JSX.Element,
const App = () => {
  console.info("render App");

  // type is implicitly bool, return type on function is implicitly bool
  const [showList, setShowList] = useState(false);

  // TODO: pass event?
  const handleClickShow = () => {
    console.debug("Click:", "handleClickShow");
    setShowList(!showList);
  }

  return (
    <>
      <Header title="Playground App" />
      <main>
        <Listing showList={showList} className="p-11" />
        <ButtonShowHide showList={showList} handleClick={handleClickShow} />
        <hr />
        <SuspendMe />
      </main>
    </>
  );
}

export default App;
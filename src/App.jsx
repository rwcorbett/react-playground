import React, { FC, useState } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";
import ButtonShowHide from "./components/ButtonShowHide";
import ButtonSort from "./components/ButtonSort";

// this is implicitly typed as a React.JSX.Element,
const App = () => {
  console.info("render App");

  // type is implicitly bool, return type on function is implicitly bool
  const [showList, setShowList] = useState(false);

  // TODO: pass event?
  const handleClickShow = () => {
    console.debug("Click:","handleClickShow");
    setShowList(!showList);
  }
  // TODO: pass event?
  const handleClickSort = () => {
    console.debug("Click:","handleClickSort");
    // TODO: sort logic should happen on Listing component || move list to store
  }

  return (
    <>
      <Header title="Playground App" />
      <main>
        <ButtonShowHide showList={showList} handleClick={handleClickShow} />
        <ButtonSort showList={showList} handleClick={handleClickSort} />
        {/* TODO: create better conditional render for this - it is not required until button click */}
        <Listing showList={showList} className="p-11" />
      </main>
    </>
  );
}

export default App;
import React, { FC, useState } from "react";
import Header from "./components/Header";
import Listing from "./components/Listing";
import ButtonShowHide from "./components/ButtonShowHide";

// this is implicitly typed as a React.JSX.Element,
const App = () => {

  // type is implicitly bool, return type on function is implicitly bool
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    console.debug("Click");
    setShowList(!showList);
  }

  return (
    <>
      <Header title="Playground App" />
      <main>
        <ButtonShowHide showList={showList} handleClick={handleClick} />
        <Listing showList={showList} className="p-11" />
      </main>
    </>
  );
}

export default App;
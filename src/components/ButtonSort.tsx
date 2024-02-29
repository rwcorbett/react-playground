import React, { FC } from "react";

interface SortButton {
    btnText: string;
    showList?: boolean;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    // DO NOT USE: handleClick?: any -- the correct event handler is shown above
}

const ButtonSort: FC<SortButton> = ({
    btnText = "Sort",
    showList,
    handleClick
}) => {
    console.info("render ButtonSort");
    return (
        <>
        { showList && <button className="btnDefault" onClick={handleClick} >{btnText}</button> }
        </>
    )
}

export default ButtonSort;
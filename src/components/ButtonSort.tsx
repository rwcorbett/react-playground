import React, { FC } from "react";

interface SortButton {
    btnText: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    // DO NOT USE: handleClick?: any -- the correct event handler is shown above
}

const ButtonSort: FC<SortButton> = ({
    btnText,
    handleClick
}) => {
    console.info("render ButtonSort");
    return (
        <button className="btnDefault" onClick={handleClick} >{btnText}</button>
    )
}

export default ButtonSort;
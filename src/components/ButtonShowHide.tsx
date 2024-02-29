import React, { FC } from "react";

interface ListButton {
    btnText: string;
    showList?: boolean;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    // DO NOT USE: handleClick?: any -- the correct event handler is shown above
}

const ButtonShowHide: FC<ListButton> = ({
    btnText,
    showList,
    handleClick
}) => {
    console.info("render ButtonShowHide");
    return (
        <button className={"btnDefault " + (showList ? 'is-showing' : 'not-showing')} onClick={handleClick} >{showList ? btnText = "Hide List" : btnText = "Show List"}</button>
    )
}

export default ButtonShowHide;
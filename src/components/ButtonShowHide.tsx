import React, { FC } from "react";

interface ListButton {
    btnText: string;
    style?: React.CSSProperties;
    showList?: boolean;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    // DO NOT USE: handleClick?: any -- the correct event handler is shown above
}

// TODO: these should come from CSS -- the inline style is used when it is dynamic
const buttonStyle: React.CSSProperties = {
    padding: '0.5rem',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '0.5rem'
}

const ButtonShowHide: FC<ListButton> = ({
        btnText,
        style = buttonStyle,
        showList,
        handleClick
    }) => {
    return (
        <button style={style} onClick={handleClick} >{showList ? btnText = "Hide List" : btnText = "Show List"}</button>
    )
}

export default ButtonShowHide;
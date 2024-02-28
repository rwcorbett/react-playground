import React, { FC } from "react";

interface ListButton {
    btnText: string;
    style?: React.CSSProperties;
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

const ShowListButton: FC<ListButton> = ({
        btnText = "Show List",
        style = buttonStyle,
        handleClick
    }) => {
    return (
        <button style={style} onClick={handleClick} >{btnText}</button>
    )
}

export default ShowListButton;
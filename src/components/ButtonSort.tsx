import React, { FC } from "react";

interface SortButton {
    btnText: string;
    style?: React.CSSProperties;
    showList?: boolean;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    // DO NOT USE: handleClick?: any -- the correct event handler is shown above
}

// TODO: these should come from CSS -- the inline style is used when it is dynamic
// TODO: no longer DRY - set global button defaults
const buttonStyle: React.CSSProperties = {
    padding: '0.5rem',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '0.5rem'
}

const ButtonSort: FC<SortButton> = ({
    btnText = "Sort",
    style = buttonStyle,
    showList,
    handleClick
}) => {
    return (
        <>
        { showList && <button style={style} onClick={handleClick} >{btnText}</button> }
        </>
    )
}

export default ButtonSort;
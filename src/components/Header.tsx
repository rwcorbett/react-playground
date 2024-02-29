import React, { FC, memo } from "react";
import Logo from "./Logo";

// type HeaderProps = {
//     title: string
// }
interface HeaderProps {
    title: string;
}

// // todo move this to app state because magic strings are bad
// const header: HeaderProps = {
//     title: "Playground"
// }

// this is implicitly typed as a React.JSX.Element, here is changed to a FunctionalComponent with `title` exposed as prop
const HeaderComp: FC<HeaderProps> = ({ title = "Default Title" }: HeaderProps) => {
    console.info("render Header");
    return (
        <header className="flex flex-row bg-gray-100">
            <h1 className="flex-auto font-sans text-3xl text-cyan-950">{title}</h1>
            <Logo sourceTxt={"/vite-logo.svg"} altTxt={"Vite"} />
            <Logo sourceTxt={"/react-logo.png"} altTxt={"React"} />
        </header>
    )
}
// export default Header;
// can memoize this since it does not accept new props and does not need to re-render, this gains memory and processing savings
const Header = memo(HeaderComp);
export default Header;
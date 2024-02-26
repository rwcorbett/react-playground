import Logo from "./Logo";

const title = "Playground";
const Header = () => {
    return (
        <header className="flex flex-row bg-gray-100">
            <h1 className="flex-auto font-sans text-3xl text-cyan-950">{title}</h1>
            <Logo src={"/public/react-logo.png"}/>
            <Logo src={"/public/vite-logo.svg"}/>
        </header>
    )
}
export default Header;
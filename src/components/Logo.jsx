export default function Logo({source}) {
    console.debug(source);
    return (
        <img className="h-9 p-1" src={source} alt="React" />
    );
}
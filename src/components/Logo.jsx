export default function Logo(image) {
    console.debug(image);
    const source = image.src;
    return (
        <img className="h-9 p-1" src={source} alt="React" />
    );
}
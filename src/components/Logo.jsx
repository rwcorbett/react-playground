export default function Logo({image}) {
    console.debug(image);
    return (
        <img className="h-9 p-1" src={image.source} alt={image.alt} />
    );
}
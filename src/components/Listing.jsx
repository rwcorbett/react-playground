const things = [
    { name: "rock" },
    { name: "leaf" },
    { name: "pen" },
    { name: "coffee" },
];

const Listing = () => {
    const list = things.map((thing) => 
        <li>{thing.name}</li>
    );
    return (
        <ul>
            {list}
        </ul>
    );
};
export default Listing;
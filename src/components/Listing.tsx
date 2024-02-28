import React, { FC } from "react";

// type thing = {
//     name: string,
//     id: number,
// }
interface thing {
    id: number;
    name: string;
}

interface ThingsList {
    things: thing[];
}

const thingsList: ThingsList = {
    things: [
        { id: 8975, name: "tree" },
        { id: 1358, name: "rock" },
        { id: 6811, name: "coffee" },
        { id: 3625, name: "lamp" }
    ]
};

// this does not use props, instead uses the object declared in this functional component
const Listing: FC<ThingsList> = () => {
    const list = thingsList.things.map((thing) =>
        <li key={thing.id}>{thing.name}</li>
    );
    return (
        <ul>
            {list}
        </ul>
    );
};

export default Listing;
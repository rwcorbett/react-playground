import React, { FC } from "react";

/* use a type? or an interface? see: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/#useful-table-for-types-vs-interfaces */
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

// TODO: sort this list
const thingsList: ThingsList = {
    things: [
        { id: 8975, name: "tree" },
        { id: 1358, name: "rock" },
        { id: 6811, name: "coffee" },
        { id: 3625, name: "lamp" }
    ]
};

// TODO: move this to state
let showList: boolean = true;

let checkShowList = () => {
    const list = thingsList.things.map((thing) =>
        <li key={thing.id}>{thing.name}</li>
    );
    let listMsg;
    if (showList) {
        listMsg = (
            <>
                <p>Here is your list:</p>
                <ul className="list-decimal list-inside">
                    {list}
                </ul>
            </>
        )
    } else {
        listMsg = (<p> No list.</p>)
    }
    return listMsg;
}

// this does not use props, instead uses the object declared in this functional component
const Listing: FC<ThingsList> = () => {

    return (
        <>
            { checkShowList() }
        </>
    );
};

export default Listing;
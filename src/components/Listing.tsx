import React, { FC, useState } from "react";
import ButtonSort from "./ButtonSort";

/* use a type? or an interface? see: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/#useful-table-for-types-vs-interfaces */
// type Thing = {
//     name: string,
//     id: number,
// }
interface Thing {
    id: number;
    name: string;
}

interface ListingProps {
    showList: boolean;
}

const thingsList: Thing[] = [
    { id: 8975, name: "tree" },
    { id: 9375, name: "apple" },
    { id: 1358, name: "rock" },
    { id: 6811, name: "coffee" },
    { id: 3625, name: "lamp" },
    { id: 6255, name: "zebra" }
];

/**
 * list component, display the list and render a button
 * @prop showList: state of list
 * @returns React FC
 */
const Listing: FC<ListingProps> = ({ showList }) => {
    console.info("render Listing");
    const [list, setList] = useState(thingsList);

    let DisplayList = () => {
        return (
            <>
                <p>Here is a list:</p>
                <ul className="list-decimal list-inside">
                    {list.map((t: Thing) => (
                        <li>{t.name} <code>{t.id}</code></li>
                    ))}
                </ul>
            </>
        );
    };

    const handleSortById = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.debug("Click:", "handleSortById");
        let newList = [...thingsList];
        newList.sort((a, b) => { return a.id - b.id });
        setList(newList);
    };

    const handleSortByName = (event: React.MouseEvent) => {
        event.stopPropagation();
        console.debug("Click:", "handleSortById");
        let newList = [...thingsList];
        newList.sort((a, b) => { return a.name.localeCompare(b.name) });
        setList(newList);
    };

    return (
        <>
            {showList &&
                <DisplayList />
            }
            <ButtonSort showList={showList} handleClick={handleSortById} btnText="Sort by id" />
            <ButtonSort showList={showList} handleClick={handleSortByName} btnText="Sort by name" />
        </>
    );
};

export default Listing;
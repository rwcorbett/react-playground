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

/**
 * list component, display the list and render a button
 * @prop showList: state of list
 * @returns React FC
 */
const ListingSkeleton: FC<{}> = () => {
    console.info("render Listing");

    const DisplayListSkel = () => {
        return (
            <>
                <p>... loading - click to show.</p>
                <ul className="list-decimal list-inside">
                    {[1, 2, 3, 4, 5].map((i: number) => (
                        <li key={i}><code></code></li>
                    ))}
                </ul>
            </>
        );
    };

    return (
        <div className="listing skeleton">
            <DisplayListSkel />
        </div>
    );
};

export default ListingSkeleton;
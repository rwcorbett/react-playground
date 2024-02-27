import React from "react";

/* can define as `type` or `interface`
    type ImageProps = { sourceTxt: string, altTxt: string }
*/
interface ImageProps {
    sourceTxt: string;
    altTxt: string;
}

export default function Logo({sourceTxt,altTxt}: ImageProps) {
    return (
        <img className="h-9 p-1" src={sourceTxt} alt={altTxt} />
    );
}

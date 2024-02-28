import React, { FunctionComponent } from "react";

/* can define as `type` or `interface` - see https://github.com/typescript-cheatsheets/react/blob/main/docs/basic/getting-started/basic-type-examples.md#useful-table-for-types-vs-interfaces
    type ImageProps = { sourceTxt: string, altTxt: string }
*/
interface ImageProps {
    sourceTxt: string;
    altTxt: string;
}

// can shorthand this to `React.FC `
const Logo: FunctionComponent<ImageProps> = ({sourceTxt,altTxt}: ImageProps) => {
    return (
        <img className="h-9 p-1" src={sourceTxt} alt={'Logo for ' + altTxt} />
    );
}

export default Logo;
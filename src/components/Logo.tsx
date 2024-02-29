import React, { FunctionComponent, memo } from "react";

/* can define as `type` or `interface` - see https://github.com/typescript-cheatsheets/react/blob/main/docs/basic/getting-started/basic-type-examples.md#useful-table-for-types-vs-interfaces
    type ImageProps = { sourceTxt: string, altTxt: string }
*/
interface ImageProps {
    sourceTxt: string;
    altTxt: string;
}

// can shorthand this to `React.FC `
const LogoComp: FunctionComponent<ImageProps> = ({sourceTxt,altTxt}: ImageProps) => {
    console.info("render LogoComp");
    return (
        <img className="h-9 p-1" src={sourceTxt} alt={'Logo for ' + altTxt} />
    );
}
// export default LogoComp;
// can memoize this since it does not accept new props and does not need to re-render, this gains memory and processing savings
// TODO: does this need to be memoized if parent is already?
const Logo = memo(LogoComp);
export default Logo;
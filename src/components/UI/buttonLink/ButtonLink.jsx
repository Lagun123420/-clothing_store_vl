import React from "react";

export const ButtonLink = (props) => {
    return (
        <>
            <div>
                <a href={props.href}>{props.name}</a>
            </div>
        </>
    )
}

export default ButtonLink;
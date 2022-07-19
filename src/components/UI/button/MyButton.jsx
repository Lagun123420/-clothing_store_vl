import React from "react";
import cl from './MyButton.module.css'

export const MyButton = (props) => {
    return (
        <>
            <button className={cl.myButton}>{props.name}</button>
        </>
    )
}

export default MyButton;
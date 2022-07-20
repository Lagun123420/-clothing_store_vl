import React from "react";
import { Link } from "react-router-dom";
import cl from './MyButton.module.css'

export const MyButton = (props) => {
    return (
        <>
            <Link to={props.href} className={cl.myButton}>{props.name}</Link>
        </>
    )
}

export default MyButton;
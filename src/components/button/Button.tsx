import React from "react";
import s from './button.module.css'

type PropsType = {
    name: string
}

export const Button = ({name}: PropsType) => {
    return (
        <button className={`${s.generalStyles}      `}>
            {name}
        </button>
    )
}
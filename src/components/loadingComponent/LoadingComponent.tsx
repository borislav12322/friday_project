import React from "react";
import s from './loadingComponent.module.css'

export const LoadingComponent = () => {
    return (
        <div className={s.loadingLayer}>
            <div className={s.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
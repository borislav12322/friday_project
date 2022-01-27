import React from "react"
import s from './errorComponent.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";

type PropsType = {

}

export const ErrorComponent = ({}: PropsType) => {

    const dispatch = useDispatch();
    const errorStatus = useSelector<AppRootStateType, boolean>(state => state.appReducer.errorStatus);
    const errorText = useSelector<AppRootStateType, string>(state => state.appReducer.errorText);


    return (
        <div className={`${s.errorTextContainer} ${errorStatus && s.showContainer}`}>
            <span className={s.errorText}>
                {errorText}
            </span>
        </div>
    )
}
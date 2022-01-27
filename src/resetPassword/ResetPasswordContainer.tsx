import React from "react";
import {ResetPassword} from "./ResetPassword";
import {Navigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

export const ResetPasswordContainer = () => {

    const newPasswordStatus = useSelector<AppRootStateType, boolean>(state => state.newPasswordReducer.setNewPasswordStatus);

    let {token} = useParams();

    if (newPasswordStatus) {
        return <Navigate to={'/login'}/>
    }

    return (
        <ResetPassword
            token={token}
        />
    )
}
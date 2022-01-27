import React from "react";
import {NewPassword} from "./NewPassword";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

export const NewPasswordContainer = () => {

    const userEmailAddress = useSelector<AppRootStateType, string>(state => state.newPasswordReducer.emailAddress);
    const emailStatus = useSelector<AppRootStateType, boolean>(state => state.newPasswordReducer.mailStatus);

    return (
        <NewPassword
            userEmailAddress={userEmailAddress}
            emailStatus={emailStatus}
        />
    )
}
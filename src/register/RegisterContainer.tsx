import React from "react";
import {Register} from "./Register";
import {Navigate, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";

export const RegisterContainer = () => {

    const loadingStatus = useSelector<AppRootStateType, boolean>(state => state.appReducer.isLoading);
    const register = useSelector<AppRootStateType, boolean>(state => state.registerReducer.registerStatus);

    if (register) {
        return <Navigate to='/login'/>
    }

    return (
        <Register
            loadingStatus={loadingStatus}
        />
    )
}
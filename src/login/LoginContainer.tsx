import React, {useCallback, useEffect, useReducer, useState} from "react";
import {Login} from "./Login";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {setIsLoadingAC} from "../redux/app-reducer";
import { Navigate } from "react-router-dom";

export type LoginValueTypes = {
    email: string
    password: string
}

export const LoginContainer = () => {
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
    const loadingStatus = useSelector<AppRootStateType, boolean>(state => state.appReducer.isLoading);
    const isLogged = useSelector<AppRootStateType, boolean>(state => state.loginReducer.isLogged);

    const changePasswordType = useCallback(() => {
        setIsShowPassword(!isShowPassword);
    },[isShowPassword])

    // if(isLogged){
    //     return <Navigate to={'/profile'}/>
    // }

    return (
        <Login
            isShowPassword={isShowPassword}
            changePasswordType={changePasswordType}
            loadingStatus={loadingStatus}
        />
    )
}
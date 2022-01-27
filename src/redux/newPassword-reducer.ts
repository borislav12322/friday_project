import {Dispatch} from "redux";
import {SetIsAppLoadingACType, setIsLoadingAC} from "./app-reducer";
import {authAPI} from "../api/authAPI";
import {FieldValues} from "react-hook-form";

type InitialStateType = {
    mailStatus: boolean
    emailAddress: string
    setNewPasswordStatus: boolean
}

type ActionsType = SetIsAppLoadingACType
    | SetIsMailSendACType
    | GetUserEmailAddressACType
    | IsSetNewPasswordACType

const initialState = {
    mailStatus: false,
    emailAddress: 'example@maasdasil.ru',
    setNewPasswordStatus: false,
}

export const newPasswordReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-MAIL-SEND-STATUS":
            return {
                ...state,
                mailStatus: action.mailStatus,
            }
        case "GET-USER-EMAIL-ADDRESS":
            return {
                ...state,
                emailAddress: action.emailAddress,
            }
        case "IS-NEW-PASSWORD-SET-SUCCESS":
            return {
                ...state,
                setNewPasswordStatus: action.setNewPasswordStatus
            }
        default:
            return state
    }
}

export type SetIsMailSendACType = ReturnType<typeof setIsMailSendAC>

export const setIsMailSendAC = (mailStatus: boolean) => {
    return {
        type: 'SET-MAIL-SEND-STATUS',
        mailStatus,
    } as const
}

export type GetUserEmailAddressACType = ReturnType<typeof getUserEmailAddressAC>

export const getUserEmailAddressAC = (emailAddress: string) => {
    return {
        type: 'GET-USER-EMAIL-ADDRESS',
        emailAddress,
    } as const
}

export type IsSetNewPasswordACType = ReturnType<typeof isSetNewPasswordAC>

export const isSetNewPasswordAC = (setNewPasswordStatus: boolean) => {
    return {
        type: 'IS-NEW-PASSWORD-SET-SUCCESS',
        setNewPasswordStatus,
    } as const
}

export const forgotPasswordTC = (values: FieldValues) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));

    authAPI.forgotPassword(values)
        .then(res => {
            console.log(res)
            dispatch(setIsMailSendAC(true));
        })
        .catch(err => {
            console.log(err)
        }).finally(() => {

        dispatch(setIsLoadingAC(false));
    })
}

export const setNewPasswordTC = (values: FieldValues) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));
    authAPI.setNewPassword(values)
        .then(res => {
            console.log(res);
            dispatch(isSetNewPasswordAC(true));
        }).catch(err => {
        console.log(err)
    }).finally(() => {
        dispatch(setIsLoadingAC(false));
    })
}
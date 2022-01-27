import {Dispatch} from "redux";
import {setIsLoadingAC} from "./app-reducer";
import {authAPI} from "../api/authAPI";
import {FieldValues} from "react-hook-form";

type InitialStateType = {
    registerStatus: boolean
}

type ActionsType = SetRegisterStatusACType

const initialState = {
    registerStatus: false
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-REGISTER-STATUS":
            return {
                ...state,
                registerStatus: action.registerStatus
            }
        default:
            return state
    }
}

export type SetRegisterStatusACType = ReturnType<typeof setRegisterStatusAC>

export const setRegisterStatusAC = (registerStatus: boolean) => {
    return {
        type: 'SET-REGISTER-STATUS',
        registerStatus,
    } as const
}

export const registerTC = (registerValues: FieldValues) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));

    authAPI.register(registerValues)
        .then(res => {
            console.log(res.data);
            dispatch(setRegisterStatusAC(true))
        }).catch(err => {
        console.log(err)
    }).finally(() => {
        dispatch(setIsLoadingAC(false));
    })
}
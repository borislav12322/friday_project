import {Dispatch} from "redux";
import {setIsLoadingAC, SetIsLoadingACType} from "./app-reducer";
import {authAPI} from "../api/authAPI";
import {FieldValues} from "react-hook-form";

type InitialStateType = {
    isLogged: boolean
}

type ActionsType =
    SetIsLoadingACType
    | SetIsLoggedACType

const initialState = {
    isLogged: false
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-IS-LOGGED":
            return {
                ...state,
                isLogged: action.isLogged
            }
        default:
            return state
    }
}

export type SetIsLoggedACType = ReturnType<typeof setIsLoggedAC>

export const setIsLoggedAC = (isLogged: boolean) => {
    return {
        type: 'SET-IS-LOGGED',
        isLogged,
    } as const
}


export const loginTC = (loginValues: FieldValues) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));
    authAPI.login(loginValues)
        .then(res => {
            dispatch(setIsLoggedAC(true));
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        }).finally(() => {
        dispatch(setIsLoadingAC(false));
    })
}

// export type

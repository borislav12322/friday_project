import {Dispatch} from "redux";
import {authAPI} from "../api/authAPI";
import {setIsLoggedAC, SetIsLoggedACType} from "./login-reducer";

type InitialStateType = {
    isLoading: boolean
    status: boolean
}

type ActionsType =
    SetIsLoadingACType
    | SetIsLoggedACType
    | SetIsAppLoadingACType

const initialState = {
    isLoading: false,
    status: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "IS-LOADING-SET":
            return {
                ...state,
                isLoading: action.isLoadingStatus
            }
        default:
            return state
    }
}

export type SetIsLoadingACType = ReturnType<typeof setIsLoadingAC>

export const setIsLoadingAC = (isLoadingStatus: boolean) => {
    return {
        type: 'IS-LOADING-SET',
        isLoadingStatus,
    } as const
}

export type SetIsAppLoadingACType = ReturnType<typeof setIsAppLoadingAC>

export const setIsAppLoadingAC = (isAppLoading: boolean) => {
    return {
        type: 'SET-IS-APP-LOADING',
        isAppLoading,
    } as const
}

export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));
    authAPI.authME()
        .then(res => {
            console.log(res)
            dispatch(setIsLoggedAC(true))
        })

}


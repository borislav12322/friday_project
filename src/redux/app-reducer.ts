import {Dispatch} from "redux";
import {authAPI} from "../api/authAPI";
import {setIsLoggedAC, SetIsLoggedACType} from "./login-reducer";
import {getUserIDAC, GetUserIDACType} from "./table-reducer";

type InitialStateType = {
    isLoading: boolean
    status: boolean
    errorStatus: boolean
    errorText: string
}

type ActionsType =
    SetIsLoadingACType
    | SetIsLoggedACType
    | SetIsAppLoadingACType
    | SetErrorAppACType
    | SetTextErrorACType
    | GetUserIDACType

const initialState = {
    isLoading: false,
    status: false,
    errorStatus: false,
    errorText: 'Something went wrong',
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "IS-LOADING-SET":
            return {
                ...state,
                isLoading: action.isLoadingStatus
            }
        case "SET-ERROR":
            return {
                ...state,
                errorStatus: action.errorStatus
            }
        case "SET-ERROR-TEXT":
            return {
                ...state,
                errorText: action.errorText
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

export type SetErrorAppACType = ReturnType<typeof setErrorAppAC>

export const setErrorAppAC = (errorStatus: boolean) => {
    return {
        type: 'SET-ERROR',
        errorStatus,
    } as const
}

export type SetTextErrorACType = ReturnType<typeof setTextErrorAC>

export const setTextErrorAC = (errorText: string) => {
    return {
        type: 'SET-ERROR-TEXT',
        errorText,
    } as const
}

export const initializeAppTC = () => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));
    authAPI.authME()
        .then(res => {
            console.log(res);
            dispatch(getUserIDAC(res.data._id))
            dispatch(setIsLoggedAC(true));
        })
        .catch(err => {
            console.log(err);
            const error = err.response;
            // dispatch(setErrorAppAC(true));
            dispatch(setTextErrorAC(error));
            console.log(error)
        })
        .finally(() => {
            // setTimeout(() => {
            //     dispatch(setErrorAppAC(false));
            // }, 15000)
            dispatch(setIsLoadingAC(false));
        })

}


import {PacksInfoType, tableAPI} from "../api/tableAPI";
import {Dispatch} from "redux";
import {setIsLoadingAC, SetIsLoadingACType} from "./app-reducer";

type InitialStateType = {
    cardsPackData: PacksInfoType
    userID: string
}

type ActionsType = GetPacksInfoACType | GetUserIDACType | SetIsLoadingACType

const initialState: InitialStateType = {
    cardsPackData: {
        cardPacks: [
            {
                "_id": '',
                "user_id": '',
                "user_name": '',
                "private": false,
                "name": '',
                "path": '',
                "grade": 0,
                "shots": 0,
                "cardsCount": 0,
                "type": '',
                "rating": 0,
                "created": '',
                "updated": '',
                "more_id": '',
                "__v": 0,
            }
        ],
        "page": 0,
        "pageCount": 0,
        "cardPacksTotalCount": 0,
        "minCardsCount": 0,
        "maxCardsCount": 0,
        "token": '',
        "tokenDeathTime": 0
    },
    userID: ''
}

export const tableReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case "GET-PACKS-INFO":
            return {
                ...state,
                cardsPackData: action.packsInfo
            }
        case "GET-USER-ID":
            return {
                ...state,
                userID: action.userID
            }
        default:
            return state
    }
}

export type GetPacksInfoACType = ReturnType<typeof getPacksInfoAC>

export const getPacksInfoAC = (packsInfo: PacksInfoType) => {
    return {
        type: 'GET-PACKS-INFO',
        packsInfo,
    } as const
}

export type GetUserIDACType = ReturnType<typeof getUserIDAC>

export const getUserIDAC = (userID: string) => {
    return {
        type: 'GET-USER-ID',
        userID,
    } as const
}

export const getPacksTC = (page: number, pageCount: number) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));

    tableAPI.getPacks(page, pageCount)
        .then(res => {
            console.log(res)
            dispatch(getPacksInfoAC(res.data))

        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(setIsLoadingAC(false));
        })
}

export const deletePackTC = (packID: string) => (dispatch: Dispatch<any>) => {
    dispatch(setIsLoadingAC(true));
    tableAPI.deletePack(packID)
        .then(res => {
            console.log(res);
            dispatch(getPacksTC(1, 10))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            dispatch(setIsLoadingAC(false));
        })

}
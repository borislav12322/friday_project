import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const tableAPI = {
    getPacks: (page: number, pageCount: number) => {
        return instance.get<PacksInfoType>('cards/pack', {
            params: {
                page: page,
                pageCount: pageCount,
            }
        })
    },

    deletePack: (id: string) => {
        return instance.delete('cards/pack', {
            params: {
                id
            }
        })
    }
}

export type PacksInfoType = {
    cardPacks: [{
        "_id": string,
        "user_id": string,
        "user_name": string,
        "private": boolean,
        "name": string,
        "path": string,
        "grade": number,
        "shots": number,
        "cardsCount": number,
        "type": string,
        "rating": number,
        "created": string,
        "updated": string,
        "more_id": string,
        "__v": number,
    }],
    "page": number,
    "pageCount": number,
    "cardPacksTotalCount": number,
    "minCardsCount": number,
    "maxCardsCount": number,
    "token": string,
    "tokenDeathTime": number
}
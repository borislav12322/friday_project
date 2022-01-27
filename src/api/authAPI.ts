import axios from "axios";
import {LoginValueTypes} from "../login/LoginContainer";
import {FieldValues} from "react-hook-form";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const authAPI = {
    login: (loginData: FieldValues) => {
        return instance.post('auth/login', loginData)
    },
    authME: () => {
        return instance.post('auth/me', {})
    },
    register: (values: FieldValues) => {
      return instance.post('auth/register', values)
    }

}

export type RegisterDataType = {
    email: string
    password: string
}
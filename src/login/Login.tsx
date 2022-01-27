import React from "react";
import s from './login.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "../components/button/Button";
import {FieldValues, SubmitHandler, useForm, UseFormHandleSubmit} from "react-hook-form";
import {LoginValueTypes} from "./LoginContainer";
import eyeIcon from '../assets/images/eyeIcon.png'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {loginTC} from "../redux/login-reducer";
import {LoadingComponent} from "../components/loadingComponent/LoadingComponent";

type PropsType = {
    isShowPassword: boolean
    changePasswordType: () => void
    loadingStatus: boolean
}

export const Login = React.memo(({isShowPassword, changePasswordType, loadingStatus}: PropsType) => {

    const dispatch = useDispatch();

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,

    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = (data: FieldValues) => {
        dispatch(loginTC(data))
        reset();
    }

    return (
        <div className={'authContainer'}>
            <div className={'authBox'}>
                <h2 className={'logoTitle'}>It-incubator</h2>
                <h3 className={'authTitle'} style={{marginBottom: '38px'}}>Sign In</h3>
                <div className={'inputContainer'}>
                    <form onSubmit={handleSubmit(onSubmit)} className={'inputForm'}>
                        <div className={'inputBox'}>
                            <label className={'labelAuth'}>
                                Email
                            </label>
                            <input defaultValue={'bizmestev@mail.ru'} className={'input'}
                                   type="email"
                                   {...register('email', {
                                       required: true,
                                       minLength: {
                                           value: 3,
                                           message: 'Min length is 3'
                                       },
                                   })}
                            />

                            {errors?.email &&
                                <span className={'errorText'}>{errors?.email?.message || 'Email required'}</span>}
                        </div>
                        <div className={'inputBox'}>
                            <label className={'labelAuth'}>
                                Password
                            </label>
                            <input defaultValue={'hapit123'} className={'input'}
                                   type={isShowPassword ? 'text' : 'password'}
                                   {...register('password', {
                                       required: true,
                                       minLength: {
                                           value: 3,
                                           message: 'Min length is 3'
                                       },
                                   })}
                            />
                            <button onClick={changePasswordType} type={'button'} className={s.changePasswordTypeBtn}>
                                <img className={s.btnImg} src={eyeIcon} alt="eyeIcon"/>
                            </button>
                            {errors?.password && <span className={'errorText'}
                                                       style={{bottom: '-18px'}}>{errors?.password?.message || 'Password required'}</span>}
                        </div>
                        <NavLink className={s.resetPasswordLink} to={'/resetPassword'}>
                            Forgot Password
                        </NavLink>
                        <button disabled={!isValid} type={'submit'} className={'generalStyles'}>Login</button>
                    </form>

                </div>

                <span className={s.sign}>
                    Don’t have an account?
                </span>
                <NavLink className={s.loginLink} to={'/register'}>
                    Sign Up
                </NavLink>
            </div>
        </div>
    )
})
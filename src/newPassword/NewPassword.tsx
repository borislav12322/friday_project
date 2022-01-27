import React from "react";
import s from './newPassword.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../redux/store";
import {FieldValues, useForm} from "react-hook-form";
import {loginTC} from "../redux/login-reducer";
import eyeIcon from "../assets/images/eyeIcon.png";
import {NavLink} from "react-router-dom";
import {forgotPasswordTC} from "../redux/newPassword-reducer";
import MailIcon from '../assets/images/mailIcon.png'

type PropsType = {
    userEmailAddress: string
    emailStatus: boolean
}

export const NewPassword = ({userEmailAddress, emailStatus}: PropsType) => {

    const dispatch = useDispatch();

    const mailText = `\n<div style=\"background-color: lime; padding: 15px\">\npassword recovery link: \n<a href='https://borislav12322.github.io/friday_project/#/newPassword/$token$'>link</a>\n</div>\n`

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
        defaultValues: {
            email: '',
            from: 'test-front-admin <ai73a@yandex.by>',
            message: mailText,
        }
    });

    const onSubmit = (values: FieldValues) => {
        dispatch(forgotPasswordTC(values))
        reset();
    }

    return (
        <div className={'authContainer'}>
            <div className={'authBox'}>
                <h2 className={'logoTitle'}>It-incubator</h2>




                {!emailStatus ?
                <>
                    <h3 className={'authTitle'} style={{marginBottom: '38px'}}>Forgot your password?</h3>
                    <div className={'inputContainer'}>
                        <form onSubmit={handleSubmit(onSubmit)} className={'inputForm'}>
                            <div className={'inputBox'}>
                                <label className={'labelAuth'}>
                                    Email
                                </label>
                                <input
                                    className={'input'}
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

                            <button disabled={!isValid} type={'submit'} className={'generalStyles'}>Send Instructions
                            </button>
                        </form>

                    </div>

                    <span className={s.sign}>
                    Did you remember your password?
                </span>
                    <NavLink className={s.loginLink} to={'/login'}>
                        Try logging in
                    </NavLink></>
                    :
                    <>
                        <img src={MailIcon} alt=""/>
                        <h3 className={'authTitle'} style={{marginBottom: '38px'}}>Check Email</h3>
                        <p className={'text'}>
                            We’ve sent an Email with instructions to {userEmailAddress}
                        </p>
                    </>
                }



            </div>
        </div>
    )
}
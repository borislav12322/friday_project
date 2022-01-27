import React from "react";
import s from './resetPassword.module.css';
import {FieldValues, useForm} from "react-hook-form";
import {loginTC} from "../redux/login-reducer";
import eyeIcon from "../assets/images/eyeIcon.png";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setNewPasswordTC} from "../redux/newPassword-reducer";

type PropsType = {
    token: string | undefined
}

export const ResetPassword = ({token}: PropsType) => {

    const dispatch = useDispatch()

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
            password: '',
            resetPasswordToken: token,
        }
    });

    const onSubmit = (data: FieldValues) => {
        dispatch(setNewPasswordTC(data))
        console.log(data);
        reset();
    }

    return (
        <div className={'authContainer'}>
            <div className={'authBox'}>
                <h2 className={'logoTitle'}>It-incubator</h2>
                <h3 className={'authTitle'} style={{marginBottom: '38px'}}>Create new password</h3>
                <div className={'inputContainer'}>
                    <form onSubmit={handleSubmit(onSubmit)} className={'inputForm'}>
                        <div className={'inputBox'}>
                            <label className={'labelAuth'}>
                                Password
                            </label>
                            <input className={'input'}
                                   {...register('password', {
                                       required: true,
                                       minLength: {
                                           value: 3,
                                           message: 'Min length is 3'
                                       },
                                   })}
                            />
                            {errors?.password && <span className={'errorText'}
                                                       style={{bottom: '-18px'}}>{errors?.password?.message || 'Password required'}</span>}
                        </div>
                        <p className={'text'}>
                            Create new password and we will send you further instructions to email
                        </p>

                        <button disabled={!isValid} type={'submit'} className={'generalStyles'}>Create new password
                        </button>
                    </form>

                </div>

            </div>
        </div>
    )
}
import React from "react";
import s from './register.module.css';
import {useDispatch} from "react-redux";
import {FieldValues, useForm} from "react-hook-form";
import {loginTC} from "../redux/login-reducer";
import eyeIcon from "../assets/images/eyeIcon.png";
import {NavLink} from "react-router-dom";
import {LoadingComponent} from "../components/loadingComponent/LoadingComponent";
import {registerTC} from "../redux/register-reducer";

type PropsType = {
    loadingStatus: boolean
}

export const Register = ({loadingStatus}: PropsType) => {

    const dispatch = useDispatch();

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        getValues,
        handleSubmit,
        reset,

    } = useForm({
        mode: 'onChange',
    });

    const onSubmit = ({email, password}: FieldValues) => {
        console.log({email, password})
        dispatch(registerTC({email, password}))
        reset();
    }

    return (
        <div className={'authContainer'}>
            <div className={'authBox'}>

                {loadingStatus ? <LoadingComponent/> : null}

                <h2 className={'logoTitle'}>It-incubator</h2>
                <h3 className={'authTitle'} style={{marginBottom: '38px'}}>Sign Up</h3>
                <div className={'inputContainer'}>
                    <form onSubmit={handleSubmit(onSubmit)} className={'inputForm'}>
                        <div className={'inputBox'}>
                            <label className={'labelAuth'}>
                                Email
                            </label>
                            <input className={'input'}
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
                            <input className={'input'}
                                   {...register('password', {
                                       required: "Please confirm password!",
                                       minLength: {
                                           value: 3,
                                           message: 'Min length is 3'
                                       },
                                   })}
                            />

                            {errors?.password && <span className={'errorText'}
                                                       style={{bottom: '-18px'}}>{errors?.password?.message || 'Password required'}</span>}
                        </div>
                        <div className={'inputBox'}>
                            <label className={'labelAuth'}>
                                Confirm Password
                            </label>
                            <input className={'input'}
                                   {...register('passwordConfirmation', {
                                       required: 'Please Confirm Password',
                                       validate: {
                                           matchesPreviousPassword: (value) => {
                                               const {password} = getValues();
                                               return password === value || "Passwords should match!";
                                           }
                                       }

                                   })}
                            />

                            {errors.passwordConfirmation && <span className={'errorText'}
                                                                  style={{bottom: '-18px'}}>{errors.passwordConfirmation.message}</span>}
                        </div>
                        <div className={s.buttonsBox}>
                            <NavLink className={s.resetPasswordLink} to={'/login'}>
                                Cancel
                            </NavLink>
                            <button disabled={!isValid} type={'submit'} className={'generalStyles'}>Register</button>
                        </div>
                    </form>

                </div>


            </div>
        </div>
    )
}
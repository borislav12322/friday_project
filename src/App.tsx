import React, {useEffect} from 'react';
import './App.css';
import {Routes, Route, NavLink, Navigate, HashRouter} from "react-router-dom";
import {NotFoundPage} from "./404/404";
import {Profile} from "./profile/Profile";
import {Test} from "./test/Test";
import {LoginContainer} from "./login/LoginContainer";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {RegisterContainer} from "./register/RegisterContainer";
import {ErrorComponent} from "./components/errorComponent/ErrorComponent";
import {AppRootStateType} from "./redux/store";
import {LoadingComponent} from "./components/loadingComponent/LoadingComponent";
import {NewPasswordContainer} from "./newPassword/NewPasswordContainer";
import {ResetPasswordContainer} from "./resetPassword/ResetPasswordContainer";

function App() {

    const dispatch = useDispatch();
    const errorStatus = useSelector<AppRootStateType, boolean>(state => state.appReducer.errorStatus);
    const loadingStatus = useSelector<AppRootStateType, boolean>(state => state.appReducer.isLoading);

    // useEffect(() => {
    //     dispatch(initializeAppTC())
    // }, [])

    return (
        <HashRouter>
            <div className="App">
                {errorStatus ? <ErrorComponent/> : null}
                {loadingStatus ? <LoadingComponent/> : null}
                <ul className="list">
                    <li className="item">
                        <NavLink to={'/login'}>
                            Login
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to={'/404'}>
                            Not Found Page
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to={'/newPassword'}>
                            New Password
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to={'/resetPassword'}>
                            Reset Password
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to={'/profile'}>
                            Profile
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to={'/register'}>
                            Register
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink to={'/test'}>
                            Test
                        </NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                    <Route path={'/404'} element={<NotFoundPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                    <Route path={'/newPassword'} element={<NewPasswordContainer/>}/>
                    <Route path={'/resetPassword/:token'} element={<ResetPasswordContainer/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/register'} element={<RegisterContainer/>}/>
                    <Route path={'/test'} element={<Test/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;

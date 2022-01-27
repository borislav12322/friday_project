import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom";
import {NotFoundPage} from "./404/404";
import {NewPassword} from "./newPassword/NewPassword";
import {Profile} from "./profile/Profile";
import {ResetPassword} from "./resetPassword/ResetPassword";
import {Test} from "./test/Test";
import {LoginContainer} from "./login/LoginContainer";
import {useDispatch} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {RegisterContainer} from "./register/RegisterContainer";

function App() {

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(initializeAppTC())
    // }, [])

    return (
        <BrowserRouter>
            <div className="App">
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
                    <Route path={'/newPassword'} element={<NewPassword/>}/>
                    <Route path={'/resetPassword'} element={<ResetPassword/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/register'} element={<RegisterContainer/>}/>
                    <Route path={'/test'} element={<Test/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

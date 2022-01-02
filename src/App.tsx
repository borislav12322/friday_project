import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom";
import {Login} from "./login/Login";
import {NotFoundPage} from "./404/404";
import {NewPassword} from "./newPassword/NewPassword";
import {Profile} from "./profile/Profile";
import {Register} from "./register/Register";
import {ResetPassword} from "./resetPassword/ResetPassword";
import {Test} from "./test/Test";

function App() {
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
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/404'} element={<NotFoundPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/404'}/>}/>
                    <Route path={'/newPassword'} element={<NewPassword/>}/>
                    <Route path={'/resetPassword'} element={<ResetPassword/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/test'} element={<Test/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

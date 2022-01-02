import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {loginReducer} from "./login-reducer";
import {newPasswordReducer} from "./newPassword-reducer";
import {profileReducer} from "./profile-reducer";
import {registerReducer} from "./register-reducer";
import {resetPasswordReducer} from "./resetPassword-reducer";
import {testReducer} from "./test-reducer";

const rootReducer = combineReducers({
    loginReducer,
    newPasswordReducer,
    profileReducer,
    registerReducer,
    resetPasswordReducer,
    testReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;
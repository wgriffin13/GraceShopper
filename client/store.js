import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const SET_USER = 'SET_USER';

const setUserActionCreator = (user) => {
    return {
        type: SET_USER,
        user
    }
}

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return action.user;
        default:
            return state;
    }
}

export const loginAttempt = (user) => {
    return dispatch => {
        return axios.post('/api/auth', user)
            .then(res => res.data)
            .then(userData => {
                console.log(userData);
                dispatch(setUserActionCreator(userData));
                return userData;
            })
    }
}

export default createStore(userReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

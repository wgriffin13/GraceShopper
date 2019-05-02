import { createStore, applyMiddleware, combineReducers } from 'redux';
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

const user = (state = {}, action) => {
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

export const sessionLogin = () => {
    return dispatch => {
      return axios.get('/api/auth')
        .then(res => res.data)
        .then(userData => dispatch(setUserActionCreator(userData)))
    }
  }
  
  export const logout = () => {
    return dispatch => {
      return axios.delete('/api/auth')
        .then(() => dispatch(setUserActionCreator({})))
    }
  }

const GET_CATEGORIES = 'GET_CATEGORIES';
const GET_PRODUCTS = 'GET_PRODUCTS';

const getCategories = categories => ({
    type: GET_CATEGORIES,
    categories,
});

const getProducts = products => ({
    type: GET_PRODUCTS,
    products,
});

const fetchCategories = () => {
    return dispatch => {
        return axios
            .get('/api/categories')
            .then(response => response.data)
            .then(categories => dispatch(getCategories(categories)));
    };
};

const fetchProducts = () => {
    return dispatch => {
        return axios
            .get('/api/products')
            .then(response => response.data)
            .then(products => dispatch(getProducts(products)));
    };
};

const categories = (state = [], action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.categories;
        default:
            return state;
    }
};

const products = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.products;
        default:
            return state;
    }
};

const reducer = combineReducers({
    categories,
    products,
    user
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export { store, fetchCategories, fetchProducts };

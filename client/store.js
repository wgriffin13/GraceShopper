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

const GET_ORDERS = 'GET_ORDERS';

const getOrders = (orders) => (
    {
        type: GET_ORDERS,
        orders
    }
);

const fetchOrders = () => {
    return (dispatch) => {
        return axios.get('/api/orders')
            .then(response => response.data)
            .then(data => {
                dispatch(getOrders(data))
            });
    };
};

const fetchUserOrders = (userId) => {
    return (dispatch) => {
        return axios.get(`/api/orders/user/${userId}`)
            .then(response => response.data)
            .then(data => {
                dispatch(getOrders(data))
            });
    };
};

const orders = (state = [], action) => {
    switch (action.type) {
        case GET_ORDERS:
            return action.orders;
        default:
            return state;
    }
}

const reducer = combineReducers({
    categories,
    products,
    user,
    orders,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

export { store, fetchCategories, fetchProducts, fetchOrders, fetchUserOrders };

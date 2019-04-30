import { createStore, applyMiddleware, combineReducers } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

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
});

const store = createStore(reducer, applyMiddleware(thunk));

export { store, fetchCategories, fetchProducts };

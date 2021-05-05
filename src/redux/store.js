import { createStore, combineReducers, compose, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { productsReducer } from "./reducers/products-reduce";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducers = combineReducers({ productsReducer })

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
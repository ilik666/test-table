import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { productsReducer } from "./reducers/products-reduce";


const rootReducers = combineReducers({ productsReducer })

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))
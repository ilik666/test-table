import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { productsReducer } from "./products/products-reducer";


const rootReducers = combineReducers({ productsReducer })

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))


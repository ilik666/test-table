import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import {productsReducer} from "./products/products-reducer";
import {deliveryReducer} from './delivery/delivery-reducer'


const rootReducers = combineReducers({productsReducer, deliveryReducer})

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch


export type InferActionsTypes<T> = T extends { [keys: string]: infer U } ? U : never

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))




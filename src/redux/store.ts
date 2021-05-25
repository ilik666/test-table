import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import {productsReducer} from "./products/products-reducer";
import {deliveryReducer} from './delivery/delivery-reducer'
import {ProductActionsCreator} from "./products/products-actions";
import {DeliveryActionsCreator} from "./delivery/delivery-actions";


const rootReducers = combineReducers({productsReducer, deliveryReducer})

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch


export type InferActionsTypes<T> = T extends {[key: string]: infer U} ? U : never

export type DeliveryActionTypes = ReturnType<InferActionsTypes<typeof DeliveryActionsCreator>>
export type ProductActionTypes = ReturnType<InferActionsTypes<typeof ProductActionsCreator>>

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))




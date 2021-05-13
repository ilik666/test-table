import {
  DELETE_PRODUCT,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT
} from "./constant-types";

export interface IProduct {
  id: number | string
  name: string
  count: number
  price: number

}

export interface IProductsState {
  products: IProduct[] | []
  isLoading: boolean
  isError: null | ErrorConstructor
}

type TFetchRequest = {
  type: typeof FETCH_PRODUCTS_REQUEST
}

type TFetchFail = {
  type: typeof FETCH_PRODUCTS_FAIL
  payload: ErrorConstructor
}

type TFetchSuccess = {
  type: typeof FETCH_PRODUCTS_SUCCESS
  payload: IProduct[]
}

type TUpdateProduct = {
  type: typeof UPDATE_PRODUCT
  payload: IProduct
}

type TDeleteProduct = {
  type: typeof DELETE_PRODUCT
  payload: number
}

export type ActionsProductTypes = TFetchRequest | TFetchFail | TFetchSuccess | TUpdateProduct | TDeleteProduct
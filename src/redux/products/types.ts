import {
  DELETE_PRODUCT,
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS, SEARCH_TERM_VALUE, TOGGLE_SORT_PROPERTY,
  UPDATE_PRODUCT
} from "./constant-types";

export interface IProduct {
  id: number
  name: string
  count: number
  price: number | string
}
export interface IProductViewRow extends IProduct{
  idx: number
  toggleUpdateProduct?: () => void
  toggleDeleteModal?: () => void
  toggleViewModal?: () => void
}

export interface IProductsState<T> {
  products: IProduct[] | []
  isLoading: boolean
  isError: null | ErrorConstructor
  searchTerm: string
  sortKey: string
  sortBy: T
}

export interface ISortProperty {
  [key: string]: boolean | null
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

type TUpdateSortProperty = {
  type: typeof TOGGLE_SORT_PROPERTY
  payload: string
}

type TSearchTermValue = {
  type: typeof SEARCH_TERM_VALUE
  payload: string
}

export type ActionsProductTypes =
  | TFetchRequest
  | TFetchFail
  | TFetchSuccess
  | TUpdateProduct
  | TDeleteProduct
  | TUpdateSortProperty
  | TSearchTermValue
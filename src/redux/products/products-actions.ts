import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from './constant-types';

import {ActionsProductTypes, IProduct} from "./types";
import {AppDispatch} from "../store";

const fetchRequestProducts: ActionsProductTypes = {type: FETCH_PRODUCTS_REQUEST};

const fetchFailProducts = (err: ErrorConstructor): ActionsProductTypes => ({
  type: FETCH_PRODUCTS_FAIL,
  payload: err,
});

const fetchSuccessProducts = (products: IProduct[]): ActionsProductTypes => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

const updateProduct = (product: IProduct): ActionsProductTypes => ({
  type: UPDATE_PRODUCT,
  payload: product,
});

const deleteProduct = (id: number): ActionsProductTypes => ({
  type: DELETE_PRODUCT,
  payload: id,
});

/*
*  Async Actions
*/

// const fetchProducts = (getProducts) => (dispatch) => {
// 	dispatch(fetchRequestProducts)
// 	getProducts()
// 		.then(data => dispatch(fetchSuccessProducts(data)))
// 		.catch(err => dispatch(fetchFailProducts(err)))
// }

const fetchProducts = (getProducts: () => Promise<IProduct[]>) => async (dispatch: AppDispatch) => {
  dispatch(fetchRequestProducts);
  try {
    const response: IProduct[] = await getProducts();
    dispatch(fetchSuccessProducts(response));
  } catch (err) {
    dispatch(fetchFailProducts(err));
  }
};

export {
  fetchRequestProducts,
  fetchFailProducts,
  fetchSuccessProducts,
  updateProduct,
  deleteProduct,

  //exp async
  fetchProducts,
};
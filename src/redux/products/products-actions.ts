import {IProduct} from "./types";
import {AppDispatch} from "../store";

export const ProductActionsCreator = {
  fetchRequestProducts: () => ({type: 'FETCH_PRODUCTS_REQUEST'} as const),

  fetchFailProducts: (err: ErrorConstructor) => ({
    type: 'FETCH_PRODUCTS_FAIL',
    payload: err
  } as const),

  fetchSuccessProducts: (products: IProduct[]) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: products
  } as const),

  updateProduct: (product: IProduct) => ({
    type: 'UPDATE_PRODUCT',
    payload: product
  } as const),

  deleteProduct: (id: number) => ({
    type: 'DELETE_PRODUCT',
    payload: id
  } as const),

  toggleSortProperty: (sortProp: string) => ({
    type: 'TOGGLE_SORT_PROPERTY',
    payload: sortProp
  } as const),

  searchTermValue: (trim: string) => ({
    type: 'SEARCH_TERM_VALUE',
    payload: trim
  } as const)
}


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
  dispatch(ProductActionsCreator.fetchRequestProducts());
  try {
    const response = await getProducts();
    dispatch(ProductActionsCreator.fetchSuccessProducts(response));
  } catch (err) {
    dispatch(ProductActionsCreator.fetchFailProducts(err));
  }
};


export {
  //exp async
  fetchProducts,
};
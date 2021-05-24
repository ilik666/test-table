import {IProduct, IProductsState, ISortProperty} from './types'
import {ProductActionTypes} from "./products-actions";

const initialState: IProductsState<ISortProperty> = {
  products: [],
  isLoading: true,
  isError: null,
  searchTerm: '',
  sortKey: 'name',
  sortBy: {
    name: false,
    price: false,
  }
};

const updateProduct = (products: IProduct[], product: IProduct, idx: number): IProduct[] => {
  if (idx === -1) {
    return [
      ...products,
      product,
    ];
  }

  return [
    ...products.slice(0, idx),
    product,
    ...products.slice(idx + 1),
  ];
};

const updateStateProducts = (products: IProduct[], product: IProduct): IProduct[] => {
  const idx = products.findIndex(({id}) => id === product.id);
  return updateProduct(products, product, idx);
};

export const productsReducer = (state = initialState, action: ProductActionTypes) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return {
        ...state,
        products: [],
        isLoading: true,
        isError: null,
      };
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: null,
      };
    case 'FETCH_PRODUCTS_FAIL':
      return {
        ...state,
        products: [],
        isLoading: false,
        isError: action.payload,
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: updateStateProducts(state.products, action.payload),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: [...state.products.filter((el) => el?.id !== action.payload)],
      };
    case 'TOGGLE_SORT_PROPERTY':
      return {
        ...state,
        sortKey: action.payload,
        sortBy: {
          ...state.sortBy,
          [action.payload]: !state.sortBy?.[action.payload]
        }
      };
    case 'SEARCH_TERM_VALUE':
      return {
        ...state,
        searchTerm: action.payload
      }
    default:
      return state;
  }
};
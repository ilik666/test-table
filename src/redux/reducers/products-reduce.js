import {
	FETCH_PRODUCTS_FAIL,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS} from "../types";

const initialState = {
	products: [],
	isLoading: true,
	isError: null
}

export  const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS_REQUEST :
			return  {
				...state,
				products: [],
				isLoading: true,
				isError: null
			};
		case FETCH_PRODUCTS_SUCCESS:
			return {
				...state,
				products: action.payload,
				isLoading: false,
				isError: null
			};
		case FETCH_PRODUCTS_FAIL:
			return {
				...state,
				products: [],
				isLoading: false,
				isError: action.payload
			};
		default:
			return state;
	}
}
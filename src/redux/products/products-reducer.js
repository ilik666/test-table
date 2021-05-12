import {
    FETCH_PRODUCTS_FAIL,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
} from './types';

const initialState = {
    products: [],
    isLoading: true,
    isError: null,
};

const updateProduct = (products, product, idx) => {
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

const updateStateProducts = (products, product) => {
    const idx = products.findIndex(({id}) => id === product.id);
    return updateProduct(products, product, idx);
};

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST :
            return {
                ...state,
                products: [],
                isLoading: true,
                isError: null,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                isLoading: false,
                isError: null,
            };
        case FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                products: [],
                isLoading: false,
                isError: action.payload,
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: updateStateProducts(state.products, action.payload),
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: [...state.products.filter(el => el.id !== action.payload)],
            };
        default:
            return state;
    }
};
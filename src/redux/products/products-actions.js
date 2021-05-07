import {
	FETCH_PRODUCTS_FAIL,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS,
	UPDATE_PRODUCT,
	DELETE_PRODUCT
} from './types'

const fetchRequestProducts = {type: FETCH_PRODUCTS_REQUEST}

const fetchFailProducts = (err) => ({
	type: FETCH_PRODUCTS_FAIL,
	payload: err
})

const fetchSuccessProducts = (products) => ({
	type: FETCH_PRODUCTS_SUCCESS,
	payload: products
})

const updateProduct = (product) => ({
	type: UPDATE_PRODUCT,
	payload: product
})


const deleteProduct = (id) => ({
	type: DELETE_PRODUCT,
	payload: id
})

/*
*  Async Actions
*/

// const fetchProducts = (getProducts) => (dispatch) => {
// 	dispatch(fetchRequestProducts)
// 	getProducts()
// 		.then(data => dispatch(fetchSuccessProducts(data)))
// 		.catch(err => dispatch(fetchFailProducts(err)))
// }

const fetchProducts = (getProducts) => async (dispatch) => {
	dispatch(fetchRequestProducts)
	try {
		const response = await getProducts()
		dispatch(fetchSuccessProducts(response))
	} catch (err) {
		dispatch(fetchFailProducts(err))
	}
}

export {
	fetchRequestProducts,
	fetchFailProducts,
	fetchSuccessProducts,
	updateProduct,
	deleteProduct,

	//exp async
	fetchProducts
}
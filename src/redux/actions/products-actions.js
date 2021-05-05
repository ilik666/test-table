import {
	FETCH_PRODUCTS_FAIL,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS } from '../types'

const fetchRequestProducts = { type: FETCH_PRODUCTS_REQUEST }

const fetchFailProducts = (err) => ({
	type: FETCH_PRODUCTS_FAIL,
	payload: err
})

const fetchSuccessProducts = (products) => ({
	type: FETCH_PRODUCTS_SUCCESS,
	payload: products
})

const fetchProducts = (getServices, dispatch) => () => {
	dispatch(fetchRequestProducts)
	getServices.getProducts()
		.then(data => dispatch(fetchSuccessProducts(data)))
		.then(err => dispatch(fetchFailProducts(err)))

}

export {
	fetchRequestProducts,
	fetchFailProducts,
	fetchSuccessProducts,
	fetchProducts
}
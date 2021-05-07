import {
	FETCH_PRODUCTS_FAIL,
	FETCH_PRODUCTS_REQUEST,
	FETCH_PRODUCTS_SUCCESS } from './types'

// Actions
const fetchRequestProducts = { type: FETCH_PRODUCTS_REQUEST }

const fetchFailProducts = (err) => ({
	type: FETCH_PRODUCTS_FAIL,
	payload: err
})

const fetchSuccessProducts = (products) => ({
	type: FETCH_PRODUCTS_SUCCESS,
	payload: products
})

// Async Actions
const fetchProducts = (getProducts) => (dispatch) => {
	dispatch(fetchRequestProducts)
	getProducts()
		.then(data => dispatch(fetchSuccessProducts(data)) )
		.catch(err => dispatch(fetchFailProducts(err)))
}


export {
	fetchRequestProducts,
	fetchFailProducts,
	fetchSuccessProducts,
	fetchProducts
}
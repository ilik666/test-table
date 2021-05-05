import {
	fetchFailProducts,
	fetchRequestProducts,
	fetchSuccessProducts} from "../actions/products-actions";

const fetchProducts = (getProducts) => (dispatch) => {
	dispatch(fetchRequestProducts)
	getProducts()
		.then(data => dispatch(fetchSuccessProducts(data)) )
		.catch(err => dispatch(fetchFailProducts(err)))
}

export {
	fetchProducts
}
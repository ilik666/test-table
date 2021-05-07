import {ProductTableRow} from "./ProductTableRow";

import {useGetPriceFormat} from "../../hooks/useGetPriceFormat";

import './ProductTableRow.scss'
import {useCallback} from "react";
import {useDispatch} from "react-redux";
// import {deleteProduct, updateProduct} from "../../redux/products/products-actions";

export const ProductTableRowContainer = ({id, price, ...property}) => {
	const [formatPrice] = useGetPriceFormat(price)
	const dispatch = useDispatch()

	const updateProduct = useCallback((id) => {
		dispatch({type: 'UPDATE_PRODUCT', payload: id})
	}, [dispatch])

	const deleteProduct = useCallback((id) => {
		dispatch({type: 'DELETE_PRODUCT', payload: id})
	}, [dispatch])

	return (<ProductTableRow {...property} price={formatPrice} deleteProduct={() => deleteProduct(id)}
													 updateProduct={() => updateProduct(id)}/>)
}
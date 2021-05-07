import {ProductTableRow} from "./ProductTableRow";
import {ModalDeleteContent} from "../Modal/Modal-delete-content";

import {useGetPriceFormat} from "../../hooks/useGetPriceFormat";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../redux/products/products-actions";

import './ProductTableRow.scss'

export const ProductTableRowContainer = ({id, price, ...property}) => {
	const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
	const [formatPrice] = useGetPriceFormat(price)
	const dispatch = useDispatch()

	const openDeleteModal = useCallback( () => {
		setVisibleDeleteModal( v => !v )
	}, [setVisibleDeleteModal])

	const handleDeleteProduct = useCallback( () => {
		dispatch(deleteProduct(id))
	}, [id, dispatch])

	return (
		<>
			<ModalDeleteContent isOpen={visibleDeleteModal} onCancel={setVisibleDeleteModal} deleteProduct={handleDeleteProduct}/>
			<ProductTableRow {...property} price={formatPrice} openDeleteModal={openDeleteModal}/>
		</>
	)
}
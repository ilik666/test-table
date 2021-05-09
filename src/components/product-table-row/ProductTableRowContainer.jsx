import {ProductTableRow} from "./ProductTableRow";
import {ModalDeleteProduct} from "../modals/Modal-delete-product";

import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../redux/products/products-actions";

import { refreshFormatPrice } from "../../helpers/helpers";

import './ProductTableRow.scss'

export const ProductTableRowContainer = ({id, price, ...property}) => {
	const [visibleDeleteModal, setVisibleDeleteModal] = useState(false)
	const dispatch = useDispatch()

	const toggleDeleteModal = useCallback( () => {
		setVisibleDeleteModal(v => !v)
	}, [setVisibleDeleteModal])

	const handleDeleteProduct = () => {
		dispatch(deleteProduct(id))
	}

	return (
		<>
			<ModalDeleteProduct isOpen={visibleDeleteModal} onCancel={toggleDeleteModal}
													deleteProduct={handleDeleteProduct}/>
			<ProductTableRow {...property} price={refreshFormatPrice(price)} toggleDeleteModal={toggleDeleteModal}/>
		</>
	)
}
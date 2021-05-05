import {useEffect} from "react";

import {fetchProducts} from "../../redux/asyncActions/asyncActions";
import {useDispatch, useSelector} from "react-redux";

import {getProducts} from "../../services/products-services";
import {ProductTableRow} from "../product-table-row/ProductTableRow";

export const ProductTables = () => {
	const dispatch = useDispatch()

	const {products, isLoading} = useSelector(({productsReducer}) => productsReducer)

	useEffect(() => {
		dispatch(fetchProducts(getProducts))
	}, [dispatch])

	if (isLoading) {
		return <h1> Loading... </h1>
	}
	return (
		<table className="table table-hover">
			<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Price</th>
				<th>Actions</th>
			</tr>
			</thead>
			<tbody>
			{products.map((el, idx) => (<ProductTableRow key={el.id} {...el} idx={idx} />))}
			</tbody>
		</table>
	)
}
import {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {fetchProducts} from "../../redux/products/products-actions";
import {useDispatch, useSelector} from "react-redux";

import {getProducts} from "../../services/products-services";
import {ProductTableRowContainer} from "../product-table-row/ProductTableRowContainer";

import './ProductTable.scss'

export const ProductTables = () => {
	const {products, isLoading} = useSelector(({productsReducer}) => productsReducer)
	const {search} = useLocation()
	const [viewProducts, setViewProducts] = useState([])
	const [sortProperty, setSortProperty] = useState({
		name: true,
		price: true
	})
	const dispatch = useDispatch()

	const sortItemsByProperty = (items, property) => {
		const sortedType = sortProperty[property]
		const direction = sortedType ? 1 : -1

		const newItems = [...items].sort((a, b) => {
			if(a[property] === b[property]) {
				return 0
			}
			return a[property] > b[property] ? direction : direction *-1
		})
		setViewProducts(newItems)
	}

	const filterItems = useCallback((arr, paramFilter = 'search') => {

		const searchLocationURL = new URLSearchParams(search)
		const searchParam = searchLocationURL.get(paramFilter)
		const regExp = /search=(\w+)/gmi

		if(!search.match(regExp)) {
			setViewProducts(arr)
			return
		}

		const searchSortItems = arr.filter( item => item?.name?.toLowerCase()?.includes(searchParam?.toLowerCase()))
		setViewProducts(searchSortItems)
	}, [search])


	const togglePropertyProducts = (e) => {
		const targetProperty = e.target.dataset?.sort
		sortItemsByProperty(viewProducts, targetProperty)

		setSortProperty(prevProps => {
			return {
				...prevProps,
				[targetProperty]: !prevProps[targetProperty]
			}
		})
	}

	useEffect(() => {
		dispatch(fetchProducts(getProducts))
	}, [dispatch])

	useEffect(() => {
		filterItems(products)
	}, [products, search, filterItems])

	if (isLoading) {
		return <h1> Loading... </h1>
	}
	return (
		<table className="table table-hover">
			<thead>
			<tr>
				<th>#</th>
				<th data-sort='name' onClick={togglePropertyProducts}>Name</th>
				<th data-sort='price' onClick={togglePropertyProducts}>Price</th>
				<th>Actions</th>
			</tr>
			</thead>
			<tbody>
			{
				viewProducts && viewProducts.map((el, idx) => (
					<ProductTableRowContainer key={el.id} idx={idx + 1} {...el} />)
				)
			}
			</tbody>
		</table>
	)
}
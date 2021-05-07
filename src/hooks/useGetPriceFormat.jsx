// noinspection JSCheckFunctionSignatures

import {useEffect, useState} from "react";

export const useGetPriceFormat =  (initialState) => {
	const [priceFormat, setPriceFormat] = useState(initialState);

	const refreshFormatPrice = (price) => {
		const newFormatPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})

		setPriceFormat(newFormatPrice.format(price))
	}

	useEffect( () => {
		refreshFormatPrice(initialState)
	}, [initialState])

	return [priceFormat]
}

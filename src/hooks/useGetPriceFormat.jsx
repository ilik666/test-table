// noinspection JSCheckFunctionSignatures

import {useCallback, useEffect, useState} from "react";

export const useGetPriceFormat =  (initialState = false) => {
	const [priceFormat, setPriceFormat] = useState(initialState);

	const refreshFormatPrice = useCallback( (price) => {
		const newFormatPrice = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)

		setPriceFormat(newFormatPrice)
	}, [])

	useEffect( () => {
		refreshFormatPrice(initialState)
	}, [initialState, refreshFormatPrice])

	return [priceFormat]
}

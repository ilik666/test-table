const refreshFormatPrice = (price, locale = 'en-US', currency = 'USD') => {
	const newFormatPrice = new Intl.NumberFormat(locale, {style: 'currency', currency})
	return newFormatPrice.format(price)
}

export {
	refreshFormatPrice
}
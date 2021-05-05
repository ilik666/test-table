export default class ProductsServices {
	data = [
		{title: 'Товар 1', count: 5, price: 12352.25},
		{title: 'Товар 2', count: 5, price: 11352.25},
		{title: 'Товар 3', count: 5, price: 10352.25}
	]
	getProducts() {
		return new Promise( (resolve, reject) => {
			setTimeout( () => resolve(this.data))
		})
	}
}
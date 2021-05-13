import {IProduct} from "../redux/products/types";

const	data: IProduct[] = [
			{id: 1, name: 'Товар 1', count: 5, price: 12352.25},
			{id: 2, name: 'Товар 2', count: 5, price: 10352.25},
			{id: 3, name: 'Товар 3', count: 5, price: 11352.25},
			{id: 4, name: 'Товар 4', count: 5, price: 9352.25},
			{id: 5, name: 'Товар 5', count: 5, price: 8352.25}
		]

export function getProducts(): Promise<IProduct[]> {
	return new Promise( (resolve) => {
		setTimeout( () => {
			resolve(data)
		}, 500)
	})
}
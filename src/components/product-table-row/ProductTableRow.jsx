import './ProductTableRow.scss'
import {useGetPriceFormat} from "../../hooks/useGetPriceFormat";

export const ProductTableRow = ({idx, name, count, price}) => {
	const [formatPrice] = useGetPriceFormat(price)

	return (
		<tr>
			<td> {idx + 1} </td>
			<td className='td-name'>
				{name}
				 <span className='ml-3 badge badge-primary badge-pill'>{count}</span>
			</td>
			<td> { formatPrice }</td>
			<td>
				<button className='btn btn-success mr-2'>Edit</button>
				<button className='btn btn-danger'> Delete</button>
			</td>
		</tr>
	)
}
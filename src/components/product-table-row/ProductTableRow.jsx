import './ProductTableRow.scss'

export const ProductTableRow = ({idx, name, count, price, updateProduct, deleteProduct}) => {
	return (
		<tr>
			<td> {idx} </td>
			<td className='td-name'>
				{name}
				<span className='ml-3 badge badge-primary badge-pill'>
					 {count}
				 </span>
			</td>
			<td> {price} </td>
			<td>
				<button className='btn btn-success mr-2' onClick={updateProduct}>Edit</button>
				<button className='btn btn-danger' onClick={deleteProduct}>Delete</button>
			</td>
		</tr>
	)
}
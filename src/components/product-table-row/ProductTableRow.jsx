import React from 'react'
import './ProductTableRow.scss'

export const ProductTableRow = React.memo( ({idx, name, count, price, openUpdateProduct, openDeleteModal}) => {
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
				<button className='btn btn-success mr-2' onClick={openUpdateProduct}>Edit</button>
				<button className='btn btn-danger' onClick={openDeleteModal}>Delete</button>
			</td>
		</tr>
	)
})
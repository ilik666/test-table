import React from 'react';
import './ProductTableRow.scss';

export const ProductTableRow = React.memo(
    ({idx, name, count, price, toggleUpdateProduct, toggleDeleteModal}) => {
        return (
            <tr>
                <td> {idx} </td>
                <td className="td-name">
                    <span onClick={toggleUpdateProduct}>{name}</span>
                    <span className="ml-3 badge badge-primary badge-pill">
					 {count}
				 </span>
                </td>
                <td> {price} </td>
                <td>
                    <button className="btn btn-success mr-2"
                            onClick={toggleUpdateProduct}>Edit
                    </button>
                    <button className="btn btn-danger"
                            onClick={toggleDeleteModal}>Delete
                    </button>
                </td>
            </tr>
        );
    });

import React from "react";
import {toggleSortProperty} from '../../redux/products/products-actions';
import {IProduct} from "../../redux/products/types";

import {useDispatch} from 'react-redux';

import {ProductTableRowContainer} from '../product-table-row/ProductTableRowContainer';

import './ProductTable.scss';

export const ProductTables = (props: { products: IProduct[] }) => {
  const dispatch = useDispatch();

  const togglePropertyProducts = (e: React.MouseEvent<HTMLTableHeaderCellElement>): void => {
    const targetProperty = e.currentTarget.getAttribute('data-sort')!;
    dispatch(toggleSortProperty(targetProperty))
  };

  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>#</th>
        <th data-sort="name" onClick={togglePropertyProducts}>Name</th>
        <th data-sort="price" onClick={togglePropertyProducts}>Price</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      {
        props.products && props.products.map((el, idx) => (
          <ProductTableRowContainer key={el.id} idx={idx + 1} {...el} />
        ))
      }
      </tbody>
    </table>
  );
};
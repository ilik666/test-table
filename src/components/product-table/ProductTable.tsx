import React from "react";
import {toggleSortProperty} from '../../redux/products/products-actions';
import {IProduct} from "../../redux/products/types";

import {useDispatch, useSelector} from 'react-redux';

import {ProductTableRowContainer} from '../product-table-row/ProductTableRowContainer';

import './ProductTable.scss';
import {getIsLoading} from "../../redux/products/selectors";

export const ProductTables = ({products}: { products: IProduct[] }) => {
  const isLoadingStore = useSelector(getIsLoading)
  const dispatch = useDispatch();

  const togglePropertyProducts = (e: React.MouseEvent<HTMLTableHeaderCellElement>): void => {
    const targetProperty = e.currentTarget.getAttribute('data-sort')!;
    dispatch(toggleSortProperty(targetProperty))
  };
  if(isLoadingStore) {
    return  <h1>Loading...</h1>
  }
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
       products && products.map((el, idx) => (
          <ProductTableRowContainer key={el.id} idx={idx + 1} {...el} />
        ))
      }
      </tbody>
    </table>
  );
};
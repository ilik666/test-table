import React from "react";

import {IProduct} from "../../redux/products/types";

import {useDispatch, useSelector} from 'react-redux';
import {getIsLoading, getSortBy} from "../../redux/products/selectors";

import {ProductTableRowContainer} from '../product-table-row/ProductTableRowContainer';

import classNames from 'classnames'
import './ProductTable.scss';
import {ProductActionsCreator} from "../../redux/products/products-actions";

export const ProductTables = ({products}: { products: IProduct[] }) => {
  const sortByNames = useSelector(getSortBy)
  const isLoadingStore = useSelector(getIsLoading)
  const dispatch = useDispatch();

  const togglePropertyProducts = (e: React.MouseEvent<HTMLTableHeaderCellElement>): void => {
    const targetProperty = e.currentTarget.getAttribute('data-sort')!;
    dispatch(ProductActionsCreator.toggleSortProperty(targetProperty))
  };
  if(isLoadingStore) {
    return  <h1>Loading...</h1>
  }
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>#</th>
        <th
          data-sort="name"
          className={classNames('default', {'active': sortByNames.name})}
          onClick={togglePropertyProducts}>Name</th>
        <th
          data-sort="price"
          className={classNames('default', {'active': sortByNames.price})}
          onClick={togglePropertyProducts}>Price</th>
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
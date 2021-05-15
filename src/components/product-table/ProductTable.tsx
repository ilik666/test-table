import React, {useCallback, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

import {fetchProducts} from '../../redux/products/products-actions';
import {useDispatch, useSelector} from 'react-redux';

import {getProducts} from '../../services/products-services';
import {ProductTableRowContainer} from '../product-table-row/ProductTableRowContainer';

import {RootState} from '../../redux/store'
import {IProduct, ISortProperty} from '../../redux/products/types'
import './ProductTable.scss';

export const ProductTables = () => {
  const {products, isLoading} = useSelector(({productsReducer}: RootState) => productsReducer);
  const [viewProducts, setViewProducts] = useState<IProduct[]>([]);
  const [sortProperty, setSortProperty] = useState<ISortProperty<boolean>>({
    name: true,
    price: true,
  });
  const dispatch = useDispatch();
  const {search} = useLocation();

  const sortItemsByProperty = (items: IProduct[], property: keyof IProduct) => {
      const sortedType = sortProperty[property];
      const direction = sortedType ? 1 : -1;

      // Решить проблему с any!!!
      const newItems = [...items].sort((a, b): number => {
        if (a[property] === b[property]) {
              return 0;
          }
        return a[property] > b[property] ? direction : direction * -1;
      });
      setViewProducts(newItems);
  };

  const togglePropertyProducts = (e: React.MouseEvent<HTMLTableHeaderCellElement>): void => {
    const targetProperty = e.currentTarget.getAttribute('data-sort')!;

    sortItemsByProperty(viewProducts, targetProperty as keyof IProduct);

    setSortProperty((prevProps) => {
      return {
        ...prevProps,
        [targetProperty]: !prevProps[targetProperty],
      };
    });
  };

  const filterItems = useCallback((arr: IProduct[], paramFilter: string = 'search'): void => {
    const searchLocationURL = new URLSearchParams(search);
    const searchParam: string | null = searchLocationURL.get(paramFilter);
    const regExp = /search=(\w+)/gmi;

    if (!search.match(regExp)) {
      setViewProducts(arr);
      return;
    }

    const searchSortItems = arr.filter(item => item?.name?.toLowerCase()?.includes(searchParam?.toLowerCase() as string));
    setViewProducts(searchSortItems);

  }, [search]);


  useEffect(() => {
    dispatch(fetchProducts(getProducts));
  }, [dispatch]);

  useEffect(() => {
      filterItems(products);
  }, [products, search, filterItems]);

  if (isLoading) {
    return <h1> Loading... </h1>;
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
        viewProducts && viewProducts.map((el, idx) => (
          <ProductTableRowContainer key={el.id} idx={idx + 1} {...el} />
        ))
      }
      </tbody>
    </table>
  );
};
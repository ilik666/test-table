import { createSelector } from "reselect";
import {RootState} from "../store";
import {IProduct, ISortProperty} from "./types";

const getProducts = (state: RootState) => state.productsReducer.products;
const sortKey = (state: RootState)=> state.productsReducer.sortKey;
const sortBy = (state: RootState) => state.productsReducer.sortBy;
const searchTerm = (state: RootState) => state.productsReducer.searchTerm;
const isLoading = (state: RootState) => state.productsReducer.isLoading;

export const getSortBy = createSelector(
  sortBy, (sortItems) => sortItems
)
export const getIsLoading = createSelector(
  isLoading, (state) => state
)

export const getSortedProducts = createSelector(
    [getProducts, sortKey, sortBy],
    (products, sortKey, sortBy) => {
        return sortItemsByProperty(products, sortKey as keyof IProduct, sortBy)
    }
);

export const getSearchProducts = createSelector(
  [getProducts, searchTerm],
   (products, term:string):IProduct[] => products.filter( el => el?.name?.toLowerCase().includes(term.toLowerCase()))
)

const sortItemsByProperty = (items:IProduct[] = [], sortKey: keyof IProduct, sortBy: ISortProperty<boolean>):IProduct[] => {
    const sortedByType = sortBy[sortKey];
    const direction = sortedByType ? 1 : -1;

    return [...items].sort((a, b) => {
          if (a[sortKey] === b[sortKey]) {
              return 0;
          }
          return a[sortKey] > b[sortKey] ? direction : direction * -1;
      });
};
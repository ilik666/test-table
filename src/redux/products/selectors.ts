import { createSelector } from "reselect";
import {RootState} from "../store";
import {IProduct, ISortProperty} from "./types";

const getProducts = (state: RootState) => state.productsReducer.products;
const sortKey = (state: RootState)=> state.productsReducer.sortKey;
const sortBy = (state: RootState) => state.productsReducer.sortBy;

export const getSortedProducts = createSelector(
    [getProducts, sortKey, sortBy],
    (products, sortKey, sortBy) => {
        return sortItemsByProperty(products, sortKey as keyof IProduct, sortBy)
    }
);

const sortItemsByProperty = (items:IProduct[] = [], sortKey: keyof IProduct, sortBy: ISortProperty<boolean>):IProduct[] => {
    const sortedList = [...items]

    const sortedByType = sortBy[sortKey];
    const direction = sortedByType ? 1 : -1;

    sortedList.sort((a, b) => {
        if (a[sortKey] === b[sortKey]) {
            return 0;
        }
        return a[sortKey] > b[sortKey] ? direction : direction * -1;
    });

    return sortedList
};
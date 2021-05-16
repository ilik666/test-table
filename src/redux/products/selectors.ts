import { createSelector } from "reselect";
import {RootState} from "../store";
import { IProduct} from "./types";

const getProducts = (state: RootState) => state.productsReducer.products;
const sortKey = (state: RootState)=> state.productsReducer.sortKey;
const sortBy = (state: RootState) => state.productsReducer.sortBy;

export const getSortedProducts = createSelector(
    [getProducts, sortKey, sortBy],
    (products, sortKey, sortBy) => {
        return sortItemsByProperty(products, sortKey, sortBy)
    }
);

const sortItemsByProperty = (items:IProduct[] = [], sortKey: string, sortBy: any):IProduct[] => {
    const sortedList = [...items]

    const sortedByType = sortBy[sortKey];
    const direction = sortedByType ? 1 : -1;

    sortedList.sort((a:any, b:any) => {
        if (a[sortKey] === b[sortKey]) {
            return 0;
        }
        return a[sortKey] > b[sortKey] ? direction : direction * -1;
    });

    return sortedList
};
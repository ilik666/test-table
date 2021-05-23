import {createSelector} from "reselect";
import {RootState} from "../store";

import {Cities, Countries} from "./types";

const countries = (state: RootState) => state.deliveryReducer.countries
const cities = (state: RootState) => state.deliveryReducer.cities
const sortCities = (state: RootState) => state.deliveryReducer.sortedCities

export const getAllCountries = createSelector(countries, (state: Countries) => state)

export const getAllCities = createSelector(cities, (state: Cities) => state)

export const getFilterCities = createSelector(
    [cities, sortCities],
    (city, sort) => {
      switch (sort) {
        case 'all':
          return Object.values(city).flat()
        default:
          return  city[sort]
      }
    }
)
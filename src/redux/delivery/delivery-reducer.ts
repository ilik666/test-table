import {Cities, Countries} from "./types";
import {DeliveryActionTypes} from "../store";

const initialState = {
  sortedCities: 'all' as string,
  countries: {
    'usa': 'США',
    'russia': 'Россия',
    'japan': 'Япония'
  } as Countries,
  cities: {
    'usa': ['New York', 'Los-Angeles', 'Chicago'],
    'russia': ['Москва', 'Казань', 'Липецк'],
    'japan': ['Nagoya', 'Toyohashi', 'Okazaki']
  } as Cities
}

export type DeliveryType = typeof initialState

export const deliveryReducer = (state: DeliveryType = initialState, action: DeliveryActionTypes) => {
  switch (action.type) {
    case 'SORT_CITIES':
      return  {
        ...state,
        sortedCities: action.payload,
      }
    default:
      return state
  }
}
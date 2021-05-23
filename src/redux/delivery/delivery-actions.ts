import {SORT_CITIES} from "./constant-types";
import {ActionDeliveryTypes} from "./types";

export const typeSortCity = (value: string): ActionDeliveryTypes => ({
  type: SORT_CITIES,
  payload: value
})


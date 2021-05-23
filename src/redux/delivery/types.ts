import {SORT_CITIES} from "./constant-types";

export type Countries = {
  [key: string]: string
}
export type Cities = {
  [key: string]: Array<string>
}
type TSortCity = {
  type: typeof SORT_CITIES
  payload: string
}


export type ActionDeliveryTypes =
    | TSortCity

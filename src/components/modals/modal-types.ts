import {IProduct} from "../../redux/products/types";

export interface IModal {
  isOpen: boolean
  onCancel: () => void
  title?: string
  children?: any
}

export interface IModalDelete extends IModal {
  deleteProduct: () => void
}

export interface IModalUpdate extends IModal {
  id?: number
  name?: string
  count?: number |string
  price?: number
  submitUpdateProduct: (value: IProduct) => void
}
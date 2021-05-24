export interface IProduct {
  id: number
  name: string
  count: number
  price: number | string
}
export interface IProductViewRow extends IProduct{
  idx: number
  toggleUpdateProduct?: () => void
  toggleDeleteModal?: () => void
  toggleViewModal?: () => void
}

export interface IProductsState<T> {
  products: IProduct[] | []
  isLoading: boolean
  isError: null | ErrorConstructor
  searchTerm: string
  sortKey: string
  sortBy: T
}

export interface ISortProperty {
  [key: string]: boolean | null
}

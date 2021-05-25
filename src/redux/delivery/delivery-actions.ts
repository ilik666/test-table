export const DeliveryActionsCreator = {
  typeSortCity: (value: string) => ({
    type: 'SORT_CITIES',
    payload: value
  } as const)
}


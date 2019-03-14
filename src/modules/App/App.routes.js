import { ROUTE_INVENTORY } from '../Inventory/Inventory.reducer'

export const routePaths = {
  [ROUTE_INVENTORY]: '/',
}

export const pathRoutes = {
  '^/$': ROUTE_INVENTORY,
}

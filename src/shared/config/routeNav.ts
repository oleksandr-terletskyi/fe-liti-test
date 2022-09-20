export const BASE_ROUTE_NAV = {
  index: '/',
  bug: '/bug',
}

export const NON_AUTHORIZED_ROUTE_NAV = {
  ...BASE_ROUTE_NAV,
  login: '/auth/login',
}

export const AUTHORIZED_ROUTE_NAV = {
  ...BASE_ROUTE_NAV,
  secret: '/auth/secret',
}

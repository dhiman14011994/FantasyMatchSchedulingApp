const RouteNames = {
  HOME: 'HOME',
  ADD_EDIT_MATCH: 'AddEditMatch',
} as const;
type RouteNames = (typeof RouteNames)[keyof typeof RouteNames];
export {RouteNames};

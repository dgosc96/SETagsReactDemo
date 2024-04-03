export const calculateTotalPages = (pageSize: number, totalItems: number) =>
  Math.ceil(totalItems / pageSize);

export const formatPrice = number => {
  return number.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'USD',
  })
}

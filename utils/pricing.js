// Assuming price is in Cents
export const formatPrice = price => `$${(price / 100).toFixed(2)}`;

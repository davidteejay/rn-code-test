export const formatPrice = priceToFormat => {
  return parseInt(priceToFormat, 10).toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });
};

export const getDiscount = ({ discount_type, price, discount }) => {
  let newPrice = null;
  switch (discount_type) {
    case 'amount':
      newPrice = price - discount;
      return newPrice === 0 ? 'Free' : formatPrice(newPrice);
    case 'percentage':
      if (discount === 100) {
        return 'Free';
      } else {
        newPrice = price - price * (discount / 100);
        return formatPrice(newPrice);
      }
    default:
      return null;
  }
};

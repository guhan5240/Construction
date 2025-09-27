// utils/price.js
export const formatPrice = (price) => {
  const num = Number(String(price).replace(/[^\d]/g, ""));
  return "₹" + num.toLocaleString("en-IN");
};

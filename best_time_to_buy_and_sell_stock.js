const input = [7, 1, 5, 3, 6, 4];

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let maxPrice = Number.NEGATIVE_INFINITY;
  let minPrice = Number.POSITIVE_INFINITY;
  let maximunProfit = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];
    if (currentPrice > maxPrice) {
      maxPrice = currentPrice;
    }
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
      maxPrice = 0;
    }
    const currentProfit = maxPrice - minPrice;
    if (maximunProfit < currentProfit) {
      maximunProfit = currentProfit;
    }
  }
  return maximunProfit >= 0 ? maximunProfit : 0;
};

console.log(maxProfit(input));

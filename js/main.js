'use strict'

{
  const prices = [180, 190, 200];

  const updatePrices = prices.map(price => {
    return price + 20;
  });
  
  console.log(updatePrices);
}
//Program that reckon the product's benefit after to deduct
//20% off
//21% VAT
//15% Income Tax

//General price: Includes VAT, after VAT you'll have to pay
//income tax 
function reckonProfits(price) {
    const VAT = price * .20;
    const priceWithVAT = price - VAT
    const priceWithTax = priceWithVAT  * .21;
    const result = priceWithVAT - priceWithTax;
    const discount = result * .15;
    let crudeProfit = result - discount;
        crudeProfit = price - crudeProfit;
        crudeProfit = crudeProfit.toFixed(2)
    let profitPercent = (crudeProfit * 100) / price
        profitPercent = profitPercent.toFixed(2)
    
    return [crudeProfit, profitPercent]
}

const result = reckonProfits(995);
console.log("The raw profit is ", result[0], "whereas the profit to percent equal to ", result[1],"%")
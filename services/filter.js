import {stockMarket} from "../data/stock-Market.js"


export function filterStocksByPrice(givenPrice, above) {
    if (above === true){
        const result1 = stockMarket.stocks.filter((stock) => stock.currentPrice > givenPrice)
        if(result1.length >0){return result1}
         console.log("Stock not found");
        return result1
    }
    else if (above === false){
        const result2 = stockMarket.stocks.filter((stock) => stock.currentPrice < givenPrice)
        if (result2.length > 0){return result2} 
        console.log("Stock not found");
        return result2
    }
}
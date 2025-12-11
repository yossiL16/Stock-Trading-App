import {stockMarket} from "../data/stock-Market.js"


export function updateStockCount(index, amount ,operation) {
    if (operation === "buy"){
    if (amount >= stockMarket.stocks[index].availableStocks){
        stockMarket.stocks[index].availableStocks -= amount
        console.log("The shares were delisted");
        
        return true
    }
    return false}
    else if(operation === "sell"){
        stockMarket.stocks[index].availableStocks += amount
        console.log("The stocks have been added to the list.");
        
    }
}

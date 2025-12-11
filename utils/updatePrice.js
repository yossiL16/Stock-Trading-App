import {stockMarket} from "../data/stock-Market.js"


export function updatePriceStock(index, operation){
    if (operation === "buy"){
    stockMarket.stocks[index].currentPrice *= 1.05
    } else if(operation === "sell"){
        stockMarket.stocks[index].currentPrice *= 0.95
    }
}



export function updatePriceStockOuthers(operation, name, category){
     if (operation === "buy"){
        for(let stock of stockMarket.stocks){
            if(stock.category === category && stock.name !== name){
                stock.currentPrice *= 1.01
            }
        }
     }
     else if(operation === "sell"){
      for(let stock of stockMarket.stocks){
            if(stock.category === category && stock.name !== name){
                stock.currentPrice *= 0.99  
            }
        }
    }
}
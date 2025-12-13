import {stockMarket} from "../data/stock-Market.js"
import {appendPriceToList} from "./appendPrice.js"
import {updateDate} from "./updateTime.js"


export function updatePriceStock(index, operation){
    if (operation === "buy"){
        appendPriceToList(stockMarket.stocks[index])
        stockMarket.stocks[index].currentPrice *= 1.05
        updateDate()
    } else if(operation === "sell"){
        appendPriceToList(stockMarket.stocks[index])
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
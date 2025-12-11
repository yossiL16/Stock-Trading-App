import {stockMarket} from "../data/stock-Market.js"


export function searchStock(identifier) {
    let list = []
    for(let stock of stockMarket.stocks){
        if(identifier === stock.name){
            list.push(stock)
        }
        else if(identifier === stock.id){
            list.push(stock)
        }
       
    }
    if(list.length === 0 ){
        console.log("Stock not found");
      
    }
    return list
}
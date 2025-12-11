import {stockMarket} from "../data/stock-Market.js"


export function searchStock(identifier) {
    let list = []
    for(let i of stockMarket.stocks){
        if(identifier === i.name){
            list.push(i)
        }
        else if(identifier === i.id){
            list.push(i)
        }
       
    }
    if(list.length === 0 ){
        console.log("Stock not found");
      
    }
    return list
}
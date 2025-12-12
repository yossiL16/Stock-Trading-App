import {stockMarket} from "../data/stock-Market.js"


export function updateDate(){
    const d = new Date()
    stockMarket.lastUpdated = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    console.log("__the last time update change__");
    
}

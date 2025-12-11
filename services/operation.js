import {stockMarket} from "../data/stock-Market.js"
import readlineSync from 'readline-sync'
import {updateStockCount} from "../utils/updateCount.js"
import {updatePriceStock,updatePriceStockOuthers} from "../utils/updatePrice.js"



export function OperateOnStock(operation, identifier){
    for(let indexStock in stockMarket.stocks){
        if(identifier === stockMarket.stocks[indexStock].name){
            while(true){
            let amount = readlineSync.questionInt("Select the desired quantity: ");
            let check = updateStockCount(indexStock, amount, operation)
            if (check === false){
                console.log("There is not enough quantity. Try less.");
                continue
            }
            else{
                break
            }
        }
            updatePriceStock(indexStock, operation)
            updatePriceStockOuthers(operation, stockMarket.stocks[indexStock].name, stockMarket.stocks[indexStock].category)
            
        }
        else if(identifier === stockMarket.stocks[indexStock].id){
                while(true){
            let amount = readlineSync.questionInt("Select the desired quantity: ");
            let check = updateStockCount(indexStock, amount, operation)
            if (check === false){
                console.log("There is not enough quantity. Try less.");
                continue
            }
            else{
                break
            }
        }
            updatePriceStock(indexStock, operation)
            updatePriceStockOuthers(operation, stockMarket.stocks[indexStock].name, stockMarket.stocks[indexStock].category)
            
        }
    }
}
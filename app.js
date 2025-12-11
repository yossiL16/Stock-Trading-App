import readlineSync from 'readline-sync' 
import {searchStock} from "./services/serch.js"
import {filterStocksByPrice} from "./services/filter.js"
import {OperateOnStock} from "./services/operation.js"

let flag = true
while(flag){
console.log("____welcom____");
console.log("what are you whant to do?");
console.log("");
console.log("1) Search for a stock by name or id");
console.log("2) Show all stocks above or below a given price");
console.log("3) Buy or sell a stock");
console.log("4) Exit");

let answer = readlineSync.questionInt("Choose a number: ");

switch (answer) {
    case 1:
        while(true){
            console.log("name = 1, id = 2 ");
            let x = readlineSync.question("Choose a number: ");
            if (x === "1"){
                let y = readlineSync.question("enter a identifier: ");
                console.log(searchStock(y));}
                
            else if(x ==="2"){
                let d = readlineSync.question("enter a identifier: ");
                console.log(searchStock(d))
               
            }
            else{
                console.log("You can only give 1 or 2.");
                
            }
            break
        }
        break

    case 2:
        let p = readlineSync.questionInt("enter a price ");
        let q = readlineSync.questionInt("for above enter 1. for below enter 2: ");
        if (q === 1){
        console.log(filterStocksByPrice(p, true));
        break
    }
        else if(q == 2){
            console.log(filterStocksByPrice(p, false));
            break
        }

        case 3:
            while(true){
            let oper = readlineSync.question("enter your operation: ")
            if (oper === "buy"){
                let indi = readlineSync.question("enter indifiner ")
                OperateOnStock(oper, indi)
                break
            }
            else if(oper === "sell"){
                let indi = readlineSync.question("enter indifiner ")
                OperateOnStock(oper, indi)
                break
            }
            else{
                console.log("you can only enter sell or buy");
                
            }
        }
            break

        case 4:
            flag = false
            console.log("Thanks and good luck!!");
            break   
    }

}

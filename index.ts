import inquirer from "inquirer";


const rates:any={

    USD:1, //BAse currency
    EUR:0.91,
    PKR:280,
    DINAR:0.38,
    YUAN:7.26
}

let answer=await inquirer.prompt([
{
    name:"from",
    message:"Enter from Currency: ",
    type:"list",
    choices:['USD','EUR','PKR','DINAR','YUAN']

},
{
    name:"To",
    message:"Enter To Currency: ",
    type:"list",
    choices:['USD','EUR','PKR','DINAR','YUAN']
},
{
    name:"amount",
    message:"enter your amount",
    type:"number"
}    
]);


let fromCurrency= rates[answer.from]
let toAmount:any = rates[answer.To]
let amount=answer.amount
let baseAmount=amount/fromCurrency
let convertedAmount:any=baseAmount*toAmount 
console.log(convertedAmount)


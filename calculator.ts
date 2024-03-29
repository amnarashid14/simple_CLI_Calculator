#! /usr/bin/env node

import inquirer from "inquirer"

const ans= await inquirer.prompt([
{
    message:"Enter first number",
    type:"number",
    name:"firstNum"
},
{
    message:"Enter Second number",
    type:"number",
    name:"secondNum"
},
{
    message:"Select operator",
    type:"list",
    name:"operators",
    choices:["Addition","Subtraction","Multiplication","Division"]
}
]);

//console.log(ans);

// If-else
if (ans.operators ===  "Addition"){
    console.log(ans.firstNum + ans.secondNum);
}
else if (ans.operators === "Subtraction")
{
    console.log(ans.firstNum - ans.secondNum);
}
else if (ans.operators === "Multiplication"){
    console.log(ans.firstNum * ans.secondNum);
}
else if (ans.operators === "Division"){
    console.log(ans.firstNum / ans.secondNum);
}
else {
    console.log("Kindly Select a Valid Operator");
    
}
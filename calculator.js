import inquirer from "inquirer";
// Prompt to user about valur from user'
let answer = await inquirer.prompt([
    {
        message: "Enter the first number", type: "number", name: "firstNumber",
    },
    {
        message: "Enter the second number", type: "number", name: "secondNumber",
    },
    {
        message: "Enter the operation", type: "list", name: "operation", choices: ["Add", "Subtract", "Multiply", "Divide"],
    }
]);
if (answer.operation === "Add") {
    console.log("The sum is: ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "Subtract") {
    console.log("The difference is: ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "Multiply") {
    console.log("The product is: ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "Divide") {
    console.log("The quotient is: ", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Invalid operation");
}

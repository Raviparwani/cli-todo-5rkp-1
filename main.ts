#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];
let condition = true;

async function addTodos() {
  while (condition) {
    let addTask = await inquirer.prompt([
      {
        name: "todo",
        type: "input",
        message: chalk
          .hex("#F18B2A")
          .bold("What you want to add in your todos ?"),
      },

      {
        name: "addmore",
        type: "confirm",
        message: chalk.yellow.bold("Do you want to add more ?"),
        default: "false",
      },
    ]);

    todos.push(addTask.todo);
    console.log(chalk.blue.bold("Current todos:"));
    console.log(chalk.green.bold(todos.join("\n")));
    condition = addTask.addmore;

      
    
 // After the while loop ends, ask if the user wants to exit
 const { exit } = await inquirer.prompt({
    name: "exit",
    type: "confirm",
    message: chalk.red.bold("Do you want to exit?")
});

if (exit) {
    console.log(chalk.yellow.bold("Exiting the program. Goodbye!"));
    process.exit(0); // Exit the program
}
  }
}
addTodos()
console.log("RAVI")
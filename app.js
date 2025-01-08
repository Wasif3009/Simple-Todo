let userInput = prompt("WHAT WOULD U LIKE TO DO");
const todos = [];
while (userInput !== "quit" && userInput !== "q") {
  if (userInput === "new") {
    let newTask = prompt("WHAT WOULD U LIKE TO ADD");
    todos.push(newTask);
    console.log(`${newTask} ADDED IN THE LIST`);
  } else if (userInput === "list") {
    console.log("*******************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }
    console.log("*******************");
  } else if (userInput === "del") {
    let delItem = parseInt(prompt("ENTER INDEX OF ITEM U WANT TO DELETE"));
    let deleted = todos.splice(delItem, 1);
    if (!Number.isNaN(delItem)) {
      console.log(`${deleted} DELETED FROM THE LIST`);
    } else {
      console.log("PLEASE ENTER A VALID INDEX ");
    }
  }
  userInput = prompt("WHAT WOULD U LIKE TO DO");
}
console.log("OK YOU QUITTED THE APP");

// THE PROGRAM IS DONE
// ISKE BAAD EK PRACTICE BHI KIYA HU USMAI EK FLAWS BHI SOLVE KIYE
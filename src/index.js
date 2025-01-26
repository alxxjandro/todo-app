import "./css/general.css";
import navBar from "./GUI/navbar";
import sideBar from "./GUI/sidebar";
import goToDashboard from "./logic/dashboard";
import addList from "./logic/createProject";
import { format, add } from "date-fns";
import Task from "./logic/todo";
import loadProject from "./logic/loadproject";


const loadDefaults = function (){
    let today = new Date();
    let testList = addList("This is a test list!");
    testList.addTask(new Task("Pretty important activity", "This activity is also a test :)", `${format(add(new Date(), { days: 1 }), "yyyy-MM-dd")}`, "High"));
    testList.addTask(new Task("Final test task", "This is another test activity to fill this To-Do with some task!.", `${format(add(new Date(), { days: 3 }), "yyyy-MM-dd")}`, "Low"));
    testList.addTask(new Task("Another important task", "This is another dummy activity in a month from today, just for testing purposes.", `${format(add(new Date(), { days: 30 }), "yyyy-MM-dd")}`, "Medium"));

    let shoppingList = addList("Shopping List");
    shoppingList.addTask(new Task("Buy groceries", "Get milk, eggs, bread, and vegetables.", `${format(add(new Date(), { days: 1 }), "yyyy-MM-dd")}`, "High"));
    shoppingList.addTask(new Task("Pick up toiletries", "Soap, shampoo, toothpaste, and tissues.", `${format(new Date(), "yyyy-MM-dd")}`, "Medium"));
    shoppingList.addTask(new Task("Get snacks", "Chips, cookies, and soda for movie night.", `${format(new Date(), "yyyy-MM-dd")}`, "Low"));
    shoppingList.addTask(new Task("Buy pet supplies", "Cat food and a new scratching post.", `${format(add(new Date(), { days: 6 }), "yyyy-MM-dd")}`, "High"));
    shoppingList.addTask(new Task("Refill prescriptions", "Pick up monthly medications.", `${format(add(new Date(), { days: 4 }), "yyyy-MM-dd")}`, "Medium"));

    let codingProjects = addList("Coding Projects");
    codingProjects.addTask(new Task("Build a To-Do App", "Create a fully functional to-do list app using JavaScript.", `${format(new Date(), "yyyy-MM-dd")}`, "High"));
    codingProjects.addTask(new Task("Debug the weather app", "Fix issues with API integration and improve error handling.", `${format(add(new Date(), { days: 5 }), "yyyy-MM-dd")}`, "Medium"));
    codingProjects.addTask(new Task("Learn a new framework", "Experiment with Vue.js by building a small project.", `${format(add(new Date(), { days: 7 }), "yyyy-MM-dd")}`, "Low"));
    
    return testList; // for debugging only
}

const innitApp = function (){
    const body = document.body;
    body.appendChild(navBar);   
    body.appendChild(sideBar);
    const content = body.appendChild(document.createElement("div"));
    content.classList.add("content");
    

    let deff = loadDefaults(); //returns the shopping list to load it for coding purposes
    goToDashboard();
    //loadProject(deff); // just for debugging purposes 
}();








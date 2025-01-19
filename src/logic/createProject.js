import createElem, * as utils from "../logic/utilities";
import { addToDashboard } from "../GUI/createProjectMenu"
import todo, { list,allTasks } from "../logic/todo";
import Task from "../logic/todo";
import goToDashboard from "./dashboard";
import images from "../GUI/imgs";

//this modules handles all the functions for the logic about creating and deleting a project

//adds a new list to an array containing all of them
const addList = function (taskName){
    const newTask = new list(taskName);
    dashboardTasks.push(newTask);
}
export default addList;

//deletes the list from the global array of lists
export const deleteList = function (list){
    console.log("borrando index");
    let index = dashboardTasks.indexOf(list);
    dashboardTasks.splice(index,1);
}

//given a list it creates its container and its added to the GUI
export const loadDashboardLists = function (dashboardTasks){
    const container = document.querySelector(".content");
    const div = Object.assign(document.createElement("div"),{ className : "listsContainer"});
    container.appendChild(div);

    dashboardTasks.forEach(task => {
        addToDashboard(task,div);
    });
}

//given a list name, it deletes it from the GUI
export const deleteFromDashboard = function (list){
    let component = document.querySelector(`.task-${list.getTitle}`);
    component.remove();
}

export const deleteFromSidebar = function (list){
    let component = document.querySelector(`.task-sb-${list.getTitle}`);
    component.remove();
}

//add the list to the projects section on the sidebar
export const addToSidebar = function (listName){
    const container = document.querySelector(".sidebarsPjs");
    let component = createElem("button",[`${listName}`],["projectBtn",`task-sb-${listName}`],container);
}

//array that contains all the lists
export const dashboardTasks = [];

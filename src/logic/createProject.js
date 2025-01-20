import createElem, * as utils from "../logic/utilities";
import { addToDashboard } from "../GUI/createProjectMenu"
import loadProject from "./loadproject";
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

    dashboardTasks.forEach((task, index) => {
        addToDashboard(task,div,index);
    });
}

//given a list name, it deletes it from the GUI
export const deleteFromDashboard = function (index){
    let component = document.querySelector(`.task-${index}`);
    if (component) {
        component.remove();
    } else {
        console.error(`Failed to delete the index at position ${index}`);
    }
}

export const deleteFromSidebar = function (index){
    let component = document.querySelector(`.task-sb-${index}`);
    if (component){
        component.remove();
    } else{
        console.error(`Failed to delete the index at position ${index}`);
    }
}

//add the list to the projects section on the sidebar
export const addToSidebar = function (listName,index){
    if (!document.querySelector(`.task-sb-${index}`)){
        const container = document.querySelector(".sidebarsPjs");
        let component = createElem("button",[`${listName.getTitle}`],["projectBtn",`task-sb-${index}`],container);

        //sidebar buttons event listener
        component.addEventListener("click", () => {
            console.log(`${listName.getTitle}`);
            //call function that loads the project
            loadProject(listName);
        });
    }
}

//function to handle updating the indices once a project is deleted
export const refreshIndeces = function () {
    if (dashboardTasks.length) {
        
        const dashboardElements = document.querySelectorAll(".taskContent");
        const sidebarElements = document.querySelectorAll(".projectBtn");

        dashboardTasks.forEach((task, index) => {
            if (dashboardElements[index]) {
                dashboardElements[index].className = `task-${index}`;
                dashboardElements[index].classList.add("taskContent");
            }

            if (sidebarElements[index]) {
                sidebarElements[index].className = `task-sb-${index}`;
                sidebarElements[index].classList.add("projectBtn");
            }
        });

        console.log("Indices refreshed.");
    } else {
        console.log("There is no project to refresh indices for.");
    }
};


//array that contains all the lists
export const dashboardTasks = [];

import createElem, * as utils from "../logic/utilities";
import { addToDashboard } from "../GUI/createProjectMenu"
import loadProject, { addToListGui } from "./loadproject";
import Task, { list,allTasks } from "../logic/todo";
import goToDashboard from "./dashboard";
import images from "../GUI/imgs";

//this modules handles all the functions for the logic about creating and deleting a project and its todos

//adds a new list to an array containing all of them
const addList = function (taskName){
    const newList = new list(taskName);
    dashboardTasks.push(newList);
    return newList;
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


// logic that manage all the todos of each project

export const addTodo = function (list,taskName, taskDesc, dueDate, taskPrior){
    let newTask = new Task(taskName,taskDesc,dueDate,taskPrior);
    list.addTask(newTask);
    loadTodos(list);
};

export const reloadTaskIndices = function (list){
    if (list.tasks.length){
        const tasks = document.querySelectorAll(".task");
        tasks.forEach((task,index) => {
            task.classList = 'task';
            task.classList.add(`index-${index}`);

            if(list.tasks[index].isChecked()) task.classList.add("checked");

            console.log(task, index);
        })
    }
}

export const deleteTodo = function (list,task){
    let index = list.tasks.indexOf(task);
    let div = document.querySelector(`.index-${index}`);

    list.tasks.splice(index,1) //remove from the array
    div.remove(); //remove from the DOM

    //reload with the correct index
    reloadTaskIndices(list);
}

export const loadTodos = function (list) {

    const previousContainer = document.querySelector(".taskContainer");
    if (previousContainer) previousContainer.remove();

    const container = document.querySelector(".content");
    const parentDiv = Object.assign(document.createElement("div"),{ className : "taskContainer"});
    container.appendChild(parentDiv);
    
    list.tasks.forEach((task, index) => {
        addToListGui(task,parentDiv,index,list);
        console.log(`Task ${task.getTitle} with Index ${index}`);
    })
}

export const checkTask = function(list, task){
    let index = list.tasks.indexOf(task);
    let div = document.querySelector(`.index-${index}`);

    console.log(list.tasks[index].isChecked());
    list.tasks[index].toggleCheck();
    console.log(list.tasks[index].isChecked());
    
    div.classList.toggle("checked");
}
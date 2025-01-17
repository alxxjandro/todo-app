import createElem, * as utils from "../logic/utilities";
import todo, { list,allTasks } from "../logic/todo";
import Task from "../logic/todo";
import goToDashboard from "./dashboard";

const addList = function (taskName){
    const newTask = new list(taskName);
    dashboardTasks.push(newTask);
}

export const loadDashboard = function (dashboardTasks){
    const container = document.querySelector(".content");
    const div = Object.assign(document.createElement("div"),{ className : "listsContainer"});
    container.appendChild(div);

    dashboardTasks.forEach(task => {
        let component = createElem("h3",[`${task.getTitle}`],["taskContent"],div);
        let amountOfTask = createElem("p",[`${task.getAmountOfTask} Task's`],["taskDescription"],component);
    });

}

export const dashboardTasks = [];
export default addList;

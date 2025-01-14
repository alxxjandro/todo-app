import createElem, * as utils from "../logic/utilities";
import todo, { list,allTasks } from "../logic/todo";
import Task from "../logic/todo";

const dashboardTasks = [];

const addTask = function (taskName){
    //console.log(`creating task ${taskName}`);


    const newTask = new list(taskName);
    dashboardTasks.push(newTask);
    console.log(newTask.getTitle);
    console.log(dashboardTasks);
}

export default addTask;

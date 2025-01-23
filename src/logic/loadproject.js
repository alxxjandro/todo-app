import createElem, * as utils from "../logic/utilities";
import { dashboardTasks } from "../logic/createProject"
import "../css/projects.css";

const loadProject = function (list){
    const content = document.querySelector(".content");
    content.innerHTML = "";
    const projectTitle = createElem("h2",[`${list.getTitle}`],["listTitle"],content);
    const addTodoBtn = createElem("button",["+"],["addTodoBtn"],projectTitle);

    addTodoBtn.addEventListener("click", () =>{
        if(!document.querySelector(".overlay")){
            document.body.appendChild(
                Object.assign(document.createElement("div"),{ className : "overlay" })
            );
        }

        if(!document.querySelector(".newTodoMenu")){
            console.log(list);
            createTodoMenu(list.getTitle);
        }
    })
}

const createTodoMenu = function (listName){

    const contentDiv = document.querySelector(".content");
    const container = Object.assign(document.createElement("div"),{ className : "newTodoMenu"});
    const textTitle = createElem("h2",[`Adding a new task to ${listName}`],["newProjectTitle"],container);
    const taskTitle = utils.createInput(
        "Task Name",
        "text",
        "TaskName",
        "TaskName",
        "A new task!",
        container
    );

    const taskDescription = utils.createInput(
        "Task Description",
        "text",
        "TaskDescription",
        "TaskDescription",
        "A brief task description...",
        container
    )

    const taskDate = utils.createInput(
        "Task Date",
        "date",
        "TaskDate",
        "TaskDate",
        "",
        container
    )

    const priority = utils.createInput(
        "Task Priority",
        "select",
        "TaskPriority",
        "TaskPriority",
        "",
        container
    )


    const btnsContainer = container.appendChild(document.createElement("div"));
    btnsContainer.classList = "btnsContainer";

    const cancelBtn = btnsContainer.appendChild(
        Object.assign(document.createElement("button"),{
            innerText : "Cancel" ,
            className : "cancelBtnInput" , 
        })
    )

    const submitBtn = btnsContainer.appendChild(
        Object.assign(document.createElement("input"),{
            value : "Add Task",
            type : "submit",
            className : "npBtnInput",
            required : true
        })
    )

    //event listener
    submitBtn.addEventListener("click", () =>{
        let list = document.querySelector("#TaskName").value;
        let input = document.querySelector("input");

        if (!list == ""){
            console.log(`Adding ${listName} to the list`);
        } 
        input.classList.add("invalid");

        //flash a red border when an invalid name its provided 
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                input.classList.add("invalid");
                setTimeout(() => {
                    input.classList.remove("invalid");
                }, 150); 
            }, i * 300); 
        }
    })
    
    cancelBtn.addEventListener("click", () => {
        container.remove();
        document.querySelector(".overlay").remove();
    })

    contentDiv.appendChild(container);
};

export default loadProject;
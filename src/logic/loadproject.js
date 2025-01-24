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
    const textTitle = createElem("h2",[`Adding a new task to`],["newProjectTitle"],container);
    textTitle.appendChild(Object.assign(document.createElement("h2"), { innerText : listName }));
    
    //input for task title
    const taskTitle = utils.createInput(
        "Task Name",
        "text",
        "TaskName",
        "TaskName",
        "A new task!",
        container
    );

    //task description
    const taskDescription = utils.createInput(
        "Task Description",
        "text",
        "TaskDescription",
        "TaskDescription",
        "A brief task description...",
        container
    )
    taskDescription.classList.add("inputDiv");

    //task date
    const taskDate = utils.createInput(
        "Task Date",
        "date",
        "TaskDate",
        "TaskDate",
        "",
        container
    )
    taskDate.classList.add("inputDiv");

    //priority drop down menu
    const priorities = ["Select an Option","Low","Medium","High"];
    const selectMenuContainer = document.createElement("div");
    const priorityMenu = Object.assign(document.createElement("select"),{
        textContent : "Select an option", 
        id : "PriorityLevel",
        name : "PriorityLevel"
    });
    const priorityLabel = Object.assign(document.createElement("label"),{ 
        htmlFor : "PriorityLevel",
        textContent : "Task Priority" 
    });

    priorities.forEach(priority => {
        priorityMenu.appendChild(
            Object.assign(document.createElement("option"), {
                value : priority,
                innerText : priority
            })
        )
    });

    selectMenuContainer.appendChild(priorityLabel);
    selectMenuContainer.appendChild(priorityMenu);
    container.appendChild(selectMenuContainer);
    selectMenuContainer.classList.add("inputDiv");


    //Submit and cancel buttons
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
        let list = document.querySelector("#TaskName");
        let inputs = document.querySelectorAll("input");
        let selectMenu = document.querySelector("select");

        if (list !== "" && inputs !== undefined && selectMenu.value !== "Select an Option"){
            console.log(`Adding ${listName} to the list`);
            return;
        } 

        inputs.forEach(input =>{
            input.classList.add("invalid");
        })
        selectMenu.classList.add("invalid");

        //flash a red border when an invalid name its provided 
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                inputs.forEach(input =>{ input.classList.add("invalid"); })
                selectMenu.classList.add("invalid");
                setTimeout(() => {
                    inputs.forEach(input =>{ input.classList.remove("invalid"); })
                    selectMenu.classList.remove("invalid");
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
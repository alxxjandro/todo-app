import createElem, * as utils from "../logic/utilities";
import images from "../GUI/imgs";
import { format, parseISO, differenceInDays, formatRFC3339 } from "date-fns";
import { dashboardTasks, addTodo, loadTodos, deleteTodo, checkTask, loadTaskInfo } from "../logic/createProject"
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
            createTodoMenu(list.getTitle,list);
        }
    })

    if (list.tasks){
        loadTodos(list);
    }
}

const createTodoMenu = function (listName,listContent){
    const overlay = document.querySelector(".overlay");
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
    const inputDate = taskDate.querySelector("input");
    inputDate.value = format(new Date(), "yyyy-MM-dd");
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
        let inputs = document.querySelectorAll('.inputDiv > input');
        let selectMenu = document.querySelector("select");

        //scrapping the data and creating the todo if valid
        if (list !== "" && inputs !== undefined && selectMenu.value !== "Select an Option"){
            addTodo(listContent,list.value, inputs[0].value ,inputs[1].value,selectMenu.value);
            document.querySelector(".overlay").remove();
            container.remove();
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

//handles adding a todo to a given list
export const addToListGui = function (task,parentDiv,index,list) {
    let div = document.createElement("div");
    div.classList.add("task")
    div.classList.add(`index-${index}`);

    let checkBtn = Object.assign(document.createElement("input"), { type : "checkbox" });
    let dueDateGUI = document.createElement("p");
    let taskTitle = Object.assign(document.createElement("p"), {
        innerText : task.getTitle
    })

    //get the time difference between the due date and 
    //the current time to determine how to display the time
    let dueDate = task.getDueDate;
    let difference = differenceInDays(dueDate,new Date());
    if (difference > 7){
        dueDateGUI.innerText = format(new Date(task.getDueDate)," 'Due on' dd-MM-yyyy ");
    } else {
        dueDateGUI.innerText = format(new Date(task.getDueDate)," 'Due this' eeee ");
    }

    //delete a todo btn
    const deleteBtn = createElem("button", [], ["taskDelBtn"]);
    const deleteIcon = document.createElement("img");
    deleteIcon.src = images.trashcan;
    deleteBtn.appendChild(deleteIcon);

    //deleting logic 
    deleteBtn.addEventListener("click", () =>{
        deleteTodo(list,task);
    })

    //check button logic, and making sure they stay checked
    if (task.isChecked()){
        div.classList.add("checked");
        checkBtn.checked = true;
    }
    checkBtn.addEventListener("click", (event) =>{
        event.stopPropagation();
        checkTask(list,task);
    })

    //logic for loading the task info when clicked
    div.addEventListener("click", () =>{
        loadTaskInfo(task);
        document.body.appendChild( //load the background blur
            Object.assign(document.createElement("div"),{ className : "overlay" })
        );
    })

    div.appendChild(checkBtn);
    div.appendChild(taskTitle);
    div.appendChild(dueDateGUI);
    div.appendChild(deleteBtn);
    parentDiv.appendChild(div);
}

export default loadProject;
import "../css/createProject.css"
import createElem, * as utils from "../logic/utilities";
import goToDashboard from "../logic/dashboard";
import goToUpcoming from "../logic/upcoming";
import goToImportant from "../logic/important";
import images from "./imgs";
import loadProject from "../logic/loadproject";
import addList, {
    deleteList,
    loadDashboardLists,
    deleteFromDashboard,
    addToSidebar,
    dashboardTasks,
    deleteFromSidebar,
    refreshIndeces
  } from "../logic/createProject";

const createProject = function (){

    const contentDiv = document.querySelector(".content");
    const container = Object.assign(document.createElement("div"),{ className : "newProjectContainer"});
    const textTitle = createElem("h2",["Create a new project"],["newProjectTitle"],container);
    const projectForm = utils.createInput(
        "Project Name",
        "text",
        "projectName",
        "projectName",
        "A really cool one!",
        container
    );

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
            value : "Create",
            type : "submit",
            className : "npBtnInput",
            required : true
        })
    )

    //create a new div with the task name, 
    //append it to the array that holds all 
    //of them and add it to the dashboard and sidebar
    submitBtn.addEventListener("click", () =>{
        let list = document.querySelector("#projectName").value;
        let input = document.querySelector("input");

        if (!list == ""){
            addList(list);
            goToDashboard();
            document.querySelector(".overlay").remove();
            return;         
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

//also handles adding the button to the sidebar as well (last line)
export const addToDashboard = function (list,div,index) {
    
    console.log(`INDEX -> ${index}`);
    
    let component = createElem("h3",[`${list.getTitle}`],["taskContent",`task-${index}`],div);
    let amountOfTask = createElem("p",[`${list.getAmountOfTask} Task's`],["taskDescription"],component);
    const delButton = Object.assign(document.createElement("img"),{src : images.trashcan});
    component.appendChild(delButton);

    //dashboard lists events listeners
    component.addEventListener("click", () => {
        console.log(`${list.getTitle}`);
        //call function that loads the project
        loadProject(list);
    });
    
    delButton.addEventListener("click", (e) => {
        e.stopPropagation(); // stop it from executing loadProject(list)
        deleteProject(list);
    })

    addToSidebar(list,index);
}

export const deleteProject = function (list) {
    let index = dashboardTasks.indexOf(list);
    if (index != -1) {
        deleteList(list);
        deleteFromDashboard(index);
        deleteFromSidebar(index);
        refreshIndeces();
        goToDashboard();
    } else {
        console.error("Couldn't find the project to delete");
    }
};
export default createProject;
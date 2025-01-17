import createElem, * as utils from "../logic/utilities";
import goToDashboard from "../logic/dashboard";
import goToUpcoming from "../logic/upcoming";
import goToImportant from "../logic/important";
import addList from "../logic/createProject";
import "../css/createProject.css"

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

    submitBtn.addEventListener("click", () =>{
        let task = document.querySelector("#projectName").value;
        let input = document.querySelector("input");

        if (!task == ""){
            addList(task);
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

export default createProject;
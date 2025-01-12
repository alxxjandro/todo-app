import createElem, * as utils from "../logic/utilities";
import "../css/createProject.css"

const createProject = function (){
    const contentDiv = Object.assign(document.querySelector(".content"),{ innerHTML : "" });;
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
            innerText : "Cancel",
            className : "cancelBtnInput"
        })
    )

    const submitBtn = btnsContainer.appendChild(
        Object.assign(document.createElement("button"),{
            innerText : "Create",
            className : "npBtnInput",
            type : "input"
        })
    )

    contentDiv.appendChild(container);

};

export default createProject;
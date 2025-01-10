import createElem, * as utils from "../logic/utilities";
import "../css/createProject.css"

const createProject = function (){
    const contentDiv = Object.assign(document.querySelector(".content"),{ innerHTML : "" });;
    const textTitle = createElem("h2",["Create a new project"],["newProjectTitle"],contentDiv);
    const projectForm = utils.createInput(
        "Project Name",
        "text",
        "projectName",
        "projectName",
        "A really cool one!",
        contentDiv);
};

export default createProject;
import createElem, { createLinkImg,addButtonListener } from "../logic/utilities";
import createProject from "./createProjectMenu";
import "../css/navbar.css"
import images from "./imgs";

const navBar = function(){
    const container = document.createElement("div");
    container.className = "navbar";

    createLinkImg("https://github.com/alxxjandro/todo-app",images.githubLogo,"githubLogo",container);
    const navBarTitle = createElem("h1",["LISTIFY"],["navbarTitle"],container);
    const addButton = createElem("button",["+"],["addButton"],container);
    addButtonListener(addButton,createProject);

    return container;
}();

export default navBar;
import createElem from "../logic/utilities";
import "../css/navbar.css"
import images from "./imgs";

const navBar = function(){
    const container = document.createElement("div");
    container.className = "navbar";

    const menuButton = createElem("a",[""],["githubLogo"],container);
    const githubLogo = Object.assign(document.createElement("img"),{className: "gitLogoImg"});
    githubLogo.src = images.githubLogo;

    menuButton.querySelector("a").href = "https://github.com/alxxjandro/todo-app";
    menuButton.querySelector("a").target = "_blank"
    menuButton.querySelector("a").appendChild(githubLogo);
    


    const navBarTitle = createElem("h1",["LISTIFY"],["navbarTitle"],container);
    const addButton = createElem("button",["+"],["addButton"],container);

    return container;
}();

export default navBar;
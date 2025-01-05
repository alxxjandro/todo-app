import createElement from "../logic/utilities";
import "../css/navbar.css"

const navBar = function(){
    const container = document.createElement("div");
    container.className = "navbar";

    const menuButton = createElement("span",["menu"],["material-symbols-outlined","menuButton"],container);
    const navBarTitle = createElement("h1",["LISTIFY"],["navbarTitle"],container);
    const addButton = createElement("button",["+"],["addButton"],container);

    return container;
}();

export default navBar;
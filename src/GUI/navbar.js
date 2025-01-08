import createElem from "../logic/utilities";
import "../css/navbar.css"

const navBar = function(){
    const container = document.createElement("div");
    container.className = "navbar";

    const menuButton = createElem("span",["menu"],["material-symbols-outlined","menuButton"],container);
    const navBarTitle = createElem("h1",["LISTIFY"],["navbarTitle"],container);
    const addButton = createElem("button",["+"],["addButton"],container);

    return container;
}();

export default navBar;
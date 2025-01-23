import createElem from "./utilities";
import "../css/projects.css";

const loadProject = function (list){
    const content = document.querySelector(".content");
    content.innerHTML = "";
    let projectTitle = createElem("h2",[`${list.getTitle}`],["listTitle"],content);
}

export default loadProject;
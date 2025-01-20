import createElem from "./utilities";

const loadProject = function (list){
    const content = document.querySelector(".content");
    content.innerHTML = "";
    let projectTitle = createElem("h2",[`${list.getTitle}`],[],content);
}

export default loadProject;
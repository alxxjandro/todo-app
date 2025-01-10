import createElem, * as utils from "../logic/utilities";

const goToImportant = function(){
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createElem("h1",["important"]));
}

export default goToImportant;
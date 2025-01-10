import createElem, * as utils from "../logic/utilities";

const goToDashboard = function(){
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createElem("h1",["dashBoard"]));
};

export default goToDashboard;
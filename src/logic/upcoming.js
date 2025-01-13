import createElem, * as utils from "../logic/utilities";

const goToUpcoming = function(){
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createElem("h1",["upcoming"],['goToUpcoming']));
}

export default goToUpcoming;
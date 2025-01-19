import createElem, * as utils from "../logic/utilities";
import addList, { loadDashboardLists, dashboardTasks } from "./createProject.js";

const goToDashboard = function(){
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createElem("h1",["dashBoard"],["goToDashboard"]));

    loadDashboardLists(dashboardTasks);
};


export default goToDashboard;
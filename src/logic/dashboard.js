import createElem, * as utils from "../logic/utilities";
import addList, { loadDashboardLists, dashboardTasks } from "./createProject.js";
import "../css/dashboard.css";

const goToDashboard = function(){
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(createElem("h1",["Welcome to the dashboard"],["goToDashboard"]));

    loadDashboardLists(dashboardTasks);
};


export default goToDashboard;
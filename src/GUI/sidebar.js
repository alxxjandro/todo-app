import images from "../GUI/imgs";
import createElem, * as utils from "../logic/utilities";
import createProject from "./createProjectMenu";
import {createButtonWithImage} from "../logic/utilities"
import "../css/sidebar.css";
import goToDashboard from "../logic/dashboard";
import goToUpcoming from "../logic/upcoming";
import goToImportant from "../logic/important";

const sideBar = (function () {
    
    // Sidebar container
    const container = document.createElement("div");
    container.className = "sideBar";

    // Task section
    const taskText = createElem("h3", ["Task"], ["sideBarText"], container);

    // Menu toggle button
    const menuBtnContainer = document.createElement("div");
    const toggleMenuBtn = createElem("button", [], ["toggleBtn"], menuBtnContainer);
    const toggleImg = document.createElement("img");
    toggleImg.src = images.rightArrow;
    toggleMenuBtn.appendChild(toggleImg);
    taskText.appendChild(menuBtnContainer);

    //  Buttons
    const dashboardBtn = createButtonWithImage("Dashboard", "dashboardBtn", images.dashboard, container);
    const upcomingBtn = createButtonWithImage("Upcoming", "todayBtn", images.calendar, container);
    const importantBtn = createButtonWithImage("Important", "importantBtn", images.star, container);
    const addProjectBtn = createElem("button", ["+"], ["addProject"], container);
   
    // Projects section
    const projectText = createElem("h3", ["Projects"], ["sideBarText","sidebarsPjs"], container);
    const pjsContainer = createElem("div",[],["sideBarProjects"],projectText);

    // Toggle menu functionality
    toggleMenuBtn.addEventListener("click", () => {
        container.classList.toggle("collapsed");
        document.body.classList.toggle("close");
    });

    // Buttons event listeners
    utils.addButtonListener(dashboardBtn, goToDashboard);
    utils.addButtonListener(upcomingBtn,goToUpcoming);
    utils.addButtonListener(importantBtn,goToImportant);
    
    //sideBar + button for adding new projects
    addProjectBtn.addEventListener("click", () =>{
        if(!document.querySelector(".overlay")){
            document.body.appendChild(
                Object.assign(document.createElement("div"),{ className : "overlay" })
            );
        }

        if(!document.querySelector(".newProjectContainer")){
            createProject();
        }
    })

    return container;
})();

export default sideBar;

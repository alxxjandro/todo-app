import createElem from "../logic/utilities";
import images from "../GUI/imgs";
import createProject from "../logic/createProjectMenu";
import {createButtonWithImage} from "../logic/utilities"
import "../css/sidebar.css";

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

    // Sidebar buttons
    createButtonWithImage("Dashboard", "dashboardBtn", images.dashboard, container);
    createButtonWithImage("Upcoming", "todayBtn", images.calendar, container);
    createButtonWithImage("Important", "importantBtn", images.star, container);

    // Projects section
    createElem("h3", ["Projects"], ["sideBarText"], container);

    // Toggle menu functionality
    toggleMenuBtn.addEventListener("click", () => {
        container.classList.toggle("collapsed");
        document.body.classList.toggle("close");
    });

    // Add project button
    const addProjectBtn = createElem("button", ["+"], ["addProject"], container);
    addProjectBtn.addEventListener("click", () => {
        console.log(createProject);
    });

    return container;
})();

export default sideBar;

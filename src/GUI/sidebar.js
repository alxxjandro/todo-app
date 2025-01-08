import createElem from "../logic/utilities";
import "../css/sidebar.css";
import images from "../GUI/imgs";

const sideBar = function (){
    const container = document.createElement("div");
    container.className = "sideBar";

    const taskText = createElem("h3",["Task"],["sideBarText"],container);

    //button for toggling the menu
    const menuBtnContainer = document.createElement("div");
    const toggleMenuBtn = document.createElement("button");
    const toggleImg = document.createElement("img");
    toggleImg.src = images.rightArrow;
    toggleMenuBtn.appendChild(toggleImg);
    toggleMenuBtn.classList = "toggleBtn";

    menuBtnContainer.appendChild(toggleMenuBtn);
    menuBtnContainer.appendChild(toggleMenuBtn);
    taskText.appendChild(menuBtnContainer);

    //sideBar buttons
    const dashboardBtn = createElem("button",["Dashboard"],["dashboardBtn"],container);
    const dashboardImg = document.createElement("img");
    dashboardImg.src = images.dashboard;

    const todayBtn = createElem("button",["Upcoming"],["todayBtn"],container);
    const todayImg = document.createElement("img");
    todayImg.src = images.calendar;

    const importantBtn = createElem("button",["Important"],["importantBtn"],container);
    const importantImg = document.createElement("img");
    importantImg.src = images.star;


    dashboardBtn.appendChild(dashboardImg);
    todayBtn.appendChild(todayImg);
    importantBtn.appendChild(importantImg);

    const projectsText = createElem("h3",["Projects"],["sideBarText"],container);

    //making the button functional
    toggleMenuBtn.addEventListener("click",() =>{
        container.classList.toggle("collapsed");
    })

    return container;
}();

export default sideBar;
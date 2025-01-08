import createElem from "../logic/utilities";
import "../css/sidebar.css";
import images from "../GUI/imgs";

const sideBar = function (){
    const container = document.createElement("div");
    container.className = "sideBar";

    //button for toggling the menu
    const menuBtnContainer = document.createElement("div");
    const toggleMenuBtn = document.createElement("button");
    const toggleImg = document.createElement("img");
    toggleImg.src = images.rightArrow;
    toggleMenuBtn.appendChild(toggleImg);
    toggleMenuBtn.classList = "toggleBtn";

    menuBtnContainer.appendChild(toggleMenuBtn);
    menuBtnContainer.appendChild(toggleMenuBtn);
    container.appendChild(menuBtnContainer);

    //sideBar buttons
    const dashboardBtn = createElem("button",["Dashboard"],["dashboardBtn"],container);
    const dashboardImg = document.createElement("img");
    dashboardImg.src = images.dashboard;

    const todayBtn = createElem("button",["Today"],["todayBtn"],container);
    const todayImg = document.createElement("img");
    todayImg.src = images.calendar;

    dashboardBtn.appendChild(dashboardImg);
    todayBtn.appendChild(todayImg);

    //making the button functional
    toggleMenuBtn.addEventListener("click",() =>{
        dashboardBtn.querySelector("button").classList.toggle("hidden");
        container.classList.toggle("collapsed");
    })

    return container;
}();

export default sideBar;
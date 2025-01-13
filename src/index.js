import "./css/general.css";
import navBar from "./GUI/navbar";
import sideBar from "./GUI/sidebar";
import goToDashboard from "./logic/dashboard";
import createProject from "./GUI/createProjectMenu";
import task, {list} from "./logic/todo";

const innitApp = function (){
    const body = document.body;
    body.appendChild(navBar);   
    body.appendChild(sideBar);
    const content = body.appendChild(document.createElement("div"));
    content.classList.add("content");

    //load the dashboard by default
    goToDashboard();
}();









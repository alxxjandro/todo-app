import "./css/general.css";
import navBar from "./GUI/navbar";
import sideBar from "./GUI/sidebar";
import goToDashboard from "./logic/dashboard";
import addList from "./logic/createProject";
import createProject from "./GUI/createProjectMenu";
import task, {list} from "./logic/todo";

const innitApp = function (){
    const body = document.body;
    body.appendChild(navBar);   
    body.appendChild(sideBar);
    const content = body.appendChild(document.createElement("div"));
    content.classList.add("content");

    //load the default projects and go to the dashboard
    addList("Shopping List");
    addList("School assignments");
    addList("Coding projects")
    goToDashboard();
}();









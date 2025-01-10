import "./css/general.css";
import navBar from "./GUI/navbar";
import sideBar from "./GUI/sidebar";
import createProject from "./logic/createProjectMenu";
import task, {list} from "./logic/todo";

const innitApp = function (){
    const body = document.body;
    body.appendChild(navBar);   
    body.appendChild(sideBar);
}();









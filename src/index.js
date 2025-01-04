import "./css/general.css"
import task, {list} from "./js/todo" 


let tomatoes = new task('Buy tomatoes', 'asd', '2024-12-31', 'High');
let shopping = new list("Shopping list");
shopping.addTask(tomatoes);
shopping.printList();




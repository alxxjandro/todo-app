
export default class Task {
    #title;
    #description;
    #dueDate;
    #priority;
    #isChecked;

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#isChecked = false;
    }

    // ~ getters
    get getTitle() {
        return this.#title;
    }

    get getDescription() {
        return this.#description;
    }

    get getDueDate() {
        return this.#dueDate;
    }

    get getPriority() {
        return this.#priority;
    }

    get getCheckStatus(){
        return this.#isChecked;
    }

    // ~ setters 
    set setTitle(newTitle) {
        this.#title = newTitle;
    }

    set setDescription(newDescription) {
        this.#description = newDescription;
    }

    set setDueDate(newDueDate) {
        this.#dueDate = newDueDate;
    }

    set setPriority(newPriority) {
        this.#priority = newPriority;
    }

    // ~ methods
    isChecked() {
        return this.#isChecked;
    }

    toggleCheck() {
        this.#isChecked = !this.#isChecked;
    }

}

export const allTasks = [];

export class list {
    #title;
    #tasks;

    constructor(title){
        this.#title = title;
        this.#tasks = [];
    }

    get getTitle(){
        return this.#title;
    }

    addTask(task){
        this.#tasks.push(task);
    }

    removeTask(task){
        const index = this.#tasks.indexOf(task);
        this.#tasks.splice(index,1);
    }

    printList(){
        if(this.#tasks.length != 0){
            this.#tasks.forEach(task => {
                console.log(task);
            });
        } else{
            console.log("this list is empty! ")
        }
    }

     get getAmountOfTask(){
        return this.#tasks.length;
    }

}

export default class task {
    constructor(title,description,dueDate,priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get getTitle(){
        return this.title;
    }

    set setTitle(title){
        this.title = title;
    }
}

export class list {
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    printList(){
        this.tasks.forEach(task => {
            console.log(task);
        });
    }

}
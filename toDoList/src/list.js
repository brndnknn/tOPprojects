export default class List {
    constructor( title, notes, tasks = [] ){
        this.title = title;
        this.notes = notes;
        this.tasks = tasks;
    }

    setTitle(value){
        this.title = value;
    }

    getTitle(){
        return this.title;
    }

    setNotes(value){
        this.title = value;
    }

    getNotes(){
        return this.notes;
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(taskIndex){
            this.tasks.splice(taskIndex, 1);
    }
    
    getTasks(){
        return this.tasks;
    }

    
};
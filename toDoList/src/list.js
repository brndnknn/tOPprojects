export default class List {
    constructor( title, dueDate, notes, tasks = [] ){
        this.title = title;
        this.dueDate = dueDate;
        this.notes = notes;
        this.tasks = tasks;
    }

    
};
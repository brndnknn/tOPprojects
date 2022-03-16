export default class Task {
    constructor( description, dueDate, priority, status ){
        this.description = description;
        this.duDate = dueDate;
        this.priority = priority;
        this.status = status;
    }

    setDescription(value){
        this.description = value;
    }

};

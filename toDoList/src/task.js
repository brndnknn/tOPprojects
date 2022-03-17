export default class Task {
    constructor( description, dueDate, priority, status ){
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    }

    setDescription(value){
        this.description = value;
    }

    getDescription(){
        return this.description;
    }

    setDueDate(value){
        this.dueDate = value;
    }

    getDueDate(){
        return this.dueDate;
    }

    setPriority(value){
        this.priority = value;
    }

    getPriority(){
        return this.priority;
    }

    setStatus(value){
        this.status = value;
    }

    getStatus(){
        return this.status;
    }

};

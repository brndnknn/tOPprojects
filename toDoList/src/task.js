export default class Task {
    constructor( description, priority, status ){
        this.description = description;
        this.priority = priority;
        this.status = status;
    }

    setDescription(value){
        this.description = value;
    }

};

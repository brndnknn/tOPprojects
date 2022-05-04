import _ from 'lodash';
import './styles.css';
import Task from './task.js';
import List from './list.js';
import App from './app.js';
import renderUI from './renderUI.js';


var app = new App();

app.createNewTask(['hello', 'monday','high', 'incomplete']);
app.createNewList(['A new List', 'No notes, just a test', [...app.allTasks]]);

console.log(app.allTasks);
console.log(app.allLists);





renderUI.getElems();
//newTask.addEventListener('click',() => console.log('add task button'))
//content.addEventListener('click',() => console.log(list))

/* 
set up UI
    

*/
import _ from 'lodash';
import './styles.css';
import Task from './task.js';
import List from './list.js';
import renderUI from './renderUI.js';

const task = new Task('hello', '');
const list = new List('newList', '', [task]);



console.log(task);


renderUI.getElems();
//newTask.addEventListener('click',() => console.log('add task button'))
//content.addEventListener('click',() => console.log(list))

/* 
set up UI
    

*/
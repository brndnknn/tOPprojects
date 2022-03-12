import _ from 'lodash';
import './styles.css';
import Task from './task.js';
import List from './list.js';

const task = new Task('hello', '');
const list = new List('newList', 'monday', '', [task]);

console.log(task);

const content = document.getElementById('content');

content.addEventListener('click',() => console.log(list))

/* 
set up UI
    

*/
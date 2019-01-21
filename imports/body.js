import { Template } from 'meteor/templating';
import { Tasks } from './api/tasks.js';
import './body.html';


Template.body.helpers({
  title() {
    return 'Quick Tasks';
  },
});

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

// const todos = [
//     { text: 'pick up milk' },
//     { text: 'say hello world' },
//     { text: 'meeting with boss' },
//   ];

//   Template.main.helpers({    
//     // tasks: [
//     //   { text: 'This is task 1' },
//     //   { text: 'This is task 2' },
//     //   { text: 'This is task 3' },
//     // ],
//     todos() {
//     return todos;
//   }
//   });
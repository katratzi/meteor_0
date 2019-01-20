import { Template } from 'meteor/templating';
import './main.html';

const todos = [
  { text: 'pick up milk' },
  { text: 'say hello world' },
  { text: 'meeting with boss' },
];

Template.main.helpers({
  title() {
    return 'Quick TODOs';
  },
  todos() {
    return todos;
  }
});
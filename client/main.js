import { Template } from 'meteor/templating';
import { Tasks } from '../imports/collections.js';
import './main.html';

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

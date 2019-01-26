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
        const tasks = Tasks.find({});
        return tasks;
    },
});


Template.body.events({
    'submit .add-todo'(event) {
        // don't do a file write
        event.preventDefault();
        // get and log text
        const text = event.target.text.value;        
        const time = event.target.time.value;        
        console.log(text + " " + time);
        // add to db
        Tasks.insert({text, time})
        // clear values
        event.target.text.value ='';        
        event.target.time.value ='';        
    }
});
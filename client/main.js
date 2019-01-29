import { Template } from 'meteor/templating';
import { Tasks } from '../imports/collections.js';
import { Accounts } from 'meteor/accounts-base';
import './main.html';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

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
        Tasks.insert({ text, 
            time,
        owner: Meteor.userId(),
        username: Meteor.user().username
     });
        
        // clear values
        event.target.text.value = '';
        event.target.time.value = '';
    }
});

Template.task.events({
    // toggle and save value
    'click .toggle-checked'(event) {
        Tasks.update(this._id, {
            $set: { checked: !this.checked }
        });
    },
    'click .delete'(event) {
        Tasks.remove(this._id);
    }

});
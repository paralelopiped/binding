Meteor.subscribe('contacts', function(){
   //return Contacts.find();
});

Template.contacts.helpers({

    contact: function(){
        return Contacts.find();
    }
});


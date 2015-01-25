Meteor.subscribe('contacts', function(){
   //return Contacts.find();
});

Template.contacts.helpers({

    contact: function(){
        return Contacts.find();
    }
});


Template.contacts.created = function() {
    //on create template
};


Template.contacts.rendered = function() {

    var rows = Contacts.find().observe({
        added: function(contact) {
            //when document is added do something
        }
    });

};


Template.contacts.events({

   'click #addContact': function (event, template) {
       Contacts.insert({
           firstname: $("#firstname").val(),
           lastname: $("#lastname").val()
       });
       $("#firstname").val("");
       $("#lastname").val("");
   },

    'click #removeContact': function (event, template) {

        Session.set('contactid', this._id);

    },

    'click #confirmDeleteContact': function(event, template){

        Contacts.remove({
                _id: Session.get('contactid')
        });
    },

    'change #search':function(event,context) {

        //to do: implement search

    }

});


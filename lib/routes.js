Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: '404'
    //waitOn: function() {  }
});

Router.route('/', 'index');
Router.route('/contacts', 'contacts');
//Use Backbone to set up a very simple, two page 
//routing scheme consisting of the main page and the
//about page
var Router = Backbone.Router.extend({
  routes: {
    "":                 "main", //Main page
    "about":            "about" //Main page / about
  },

  main: function() {
    Session.set('currentPage', 'main');
  },

  about: function() {
    Session.set('currentPage', 'about');
  }
});

var app = new Router();

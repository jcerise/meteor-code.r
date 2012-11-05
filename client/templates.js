//Return true if the user has clicked on the 
//about link, false otherwise.
//TODO: Theres probably a better way to handle this...
Template.content.displayAbout = function() {
  if (Session.get("currentPage") == 'about') {
    return true;
  }else{
    return false;
  }
};

Template.mainContent.validUser = function() {
  user = Meteor.user();
  console.log(user);
  if (Meteor.user()){
    return  "Welcome, you have successfully logged in!";
  }else{
    return "You are not logged in!";
  }
};

Snippets = new Meteor.Collection("snippets");

Template.mainContent.snippets = function() {
    var snippets = Snippets.find({}, {});
    snippets.forEach(function(snippet) {
      //blah
    });
    //var fetchedObjects =  
    return snippets;
};

Template.content.rendered = function() {
    //Load the syntax highlighter once all content has been rendered
    Meteor.defer(function() {
      console.log("Template snippet rendered");
      hljs.initHighlighting();
    });
};

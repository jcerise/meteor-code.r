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
    var query = Snippets.find({});
    
    query.observe({
      added: function(snippet) {
        window.setTimeout(SyntaxHighlighter.all(), 200);
      },
      changed: function(snippet) {
        window.setTimeout(SyntaxHighlighter.all(), 200);
      }
    }); 

    return query;
};

Template.mainContent.rendered = function() {
    //Load the syntax highlighter once all content has been rendered
    Meteor.defer(function() {
      //SyntaxHighlighter.all();
      console.log("Template snippet rendered");
    });
};
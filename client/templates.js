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
    return Snippets.find({}, {});
};

Template.snippet.body = function() {
    console.log(hljs.highlightAuto(this.body));
    
    var bodyCode = hljs.highlightAuto(this.body).value;
    
    var t=bodyCode.length;
    if (bodyCode.charAt(0)=='"') bodyCode=bodyCode.substring(1,t--);
	if (bodyCode.charAt(--t)=='"') bodyCode=bodyCode.substring(0,t);
    
    return bodyCode;
}

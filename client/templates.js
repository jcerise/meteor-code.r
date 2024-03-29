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
    var bodyCode = hljs.highlightAuto(this.body).value;
    console.log(bodyCode);
    return this.body;
}

Template.snippet.rendered = function() {
    hljs.initHighlighting();
    console.log(this);
    jQuery(".body").html('<pre><code class="javascript">' + hljs.highlight('javascript', this.data.body).value + '</code></pre>');
}

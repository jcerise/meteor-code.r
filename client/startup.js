Meteor.startup(function() {
  Backbone.history.start({pushState: true});
  SyntaxHighlighter.all();
});

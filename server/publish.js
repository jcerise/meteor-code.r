//Snippets -- {title: String,
//             tags: [String, ...]}
Snippets = new Meteor.Collection("snippets");

Meteor.publish('snippets', function() {
  return Snippets.find();
});

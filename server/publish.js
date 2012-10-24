//Snippets -- {title: String,
//             tags: [String, ...]}
Snippets = new Meteor.collection("snippets");

Meteor.publish('snippets', function() {
  return Snippets.find();
});

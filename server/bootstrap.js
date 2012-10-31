Meteor.startup(function() {
  //Check to see if the Snippets collection is empty,
  //if it is, populate it with some sample data
  if (Snippets.find().count() === 0) {
    var data = [
      {title: "Test Snippet",
       body: '<pre class="brush: js">\n' +
             'function () {\n' +
             '  alert("test");\n' +
             '}\n' +
             '</pre>',
       tags: ["Test", "Test2", "Test3"]
      },
      {title: "Test Snippet 2",
       body: '<pre class="brush: js">\n' +
             'function () {\n' +
             '  alert("test");\n' +
             '}\n' +
             '</pre>',
       tags: ["Test2", "Test3"]
      }
    ];

    for (var i = 0; i < data.length; i++) {
      Snippets.insert({title: data[i].title,
                       body: data[i].body,
                       tags: data[i].tags});
    }
  }
});

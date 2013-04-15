App.Collections.Notes = Backbone.Collection.extend({
  model: App.Models.Note,
  url: 'http://localhost:5000/notes'
});

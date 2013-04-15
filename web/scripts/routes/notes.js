App.Routers.Notes = Backbone.Router.extend({
  routes: {
    "note/:id"  : "edit",
      ""        : "index",
      "new"     : "newNote"
    },

  edit: function(id) {
    var note = new Note({ id: id });
    note.fetch({
      success: function(model, resp) {
        new App.Views.Edit({ model: note });
      }
    });
  },

  index: function() {
    var notes = new App.Collections.Notes();
    notes.fetch({
      success: function() {
        new App.Views.Index({ collection: notes });
      }
    });
  },

  newNote: function() {
    new App.Views.Edit({ model: new App.Models.Note() });
  }

});

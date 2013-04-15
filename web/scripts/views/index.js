App.Views.Index = Backbone.View.extend({
  initialize: function() {
    this.notes = this.options.collection;
      this.render();
  },
    
  render: function() {
    if(this.notes.length > 0) {
      var out = "<h3><a href='#new'>Create New</a></h3><ul>";
      _(this.notes).each(function(item) {
        out += "<li><a href='#notes/" + item.id + "'>" + item.escape('title') + "</a></li>";
      });
      out += "</ul>";
    } 
    else {
      out = "<h3>No notes! <a href='#new'>Create one</a></h3>";
    }
    $(this.el).html(out);
    $('#app').html(this.el);
  }
});

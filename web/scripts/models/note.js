App.Models.Note = Backbone.Model.extend({
  url : function() {
    var base = 'http://localhost:5000/notes';
    if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
    }
});

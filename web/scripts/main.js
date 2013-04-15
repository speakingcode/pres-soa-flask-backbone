var App = {
  Views       : {},
  Routers     : {},
	Collections : {},
  Models      : {},

  init  : function() {
    new App.Routers.Notes();
    Backbone.history.start();
    Backbone.emulateHTTP = true;
  }
};

window.Redshift = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	// Redshift.Timers = {};
	  new Redshift.Routers.App();

	  Backbone.history.start();
  }
};

$(document).ready(function(){
  Redshift.initialize();
});

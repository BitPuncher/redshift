Redshift.Routers.App = Backbone.Router.extend({
	routes: {
		"game": "game",
	},

	game: function() {
		Redshift.Terran = new Redshift.Models.System({ 'system_id':1 });
		Redshift.Terran.fetch({ 'parse': true,
			success: function () {
				//here create view to start drawing the stuff in canvas
			},
		});
	},
})